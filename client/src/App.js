import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './pages/home';
import { CreateRecipe } from './pages/create-recipe';
import { SavedRecipes } from './pages/Saved-recipe';
import { Auth } from './pages/auth';
import { Navbar } from './components/Navbar';

function App() {

  return (
    <div>
      <Router>
        <Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/create-recipe' element={<CreateRecipe />} />
            <Route path='/saved-recipe' element={<SavedRecipes />} />
          </Routes>
        </Navbar>
      </Router>
    </div>
  );
}

export default App;
