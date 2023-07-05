import express from "express";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const router = express.Router();
import { UserModel } from "../models/Users.js";

router.post("/register", async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username });

    if (user) {
        return res.json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword });
    await newUser.save();

    res.json({ message: "User created successfully" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username });
    console.log(`User found: ${user}`);
    if (!user) {
        return res.json({ message: "User Not Found or Password is Incorrect!" }); // user does not exist but thats for security perpose
    }
    const isPasswordConfirmed = await bcrypt.compare(password, user.password);

    if (!isPasswordConfirmed) {
        return res
        .status(400)
        .json({ message: "User or Password is Incorrect!" });
    }

    const options = {
        expiresIn: '1h' // Token expiration time
    };
    
    const token = jwt.sign({ id: user._id }, "secret", options);
    res.json({ token, userID: user._id });

});

export { router as userRouter };