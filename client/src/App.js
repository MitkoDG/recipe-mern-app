import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { CreateRecipe } from './components/Create-recipe';
import { SavedRecipes } from './components/Saved-recipe';
import { Auth } from './components/Auth';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create-recipe' element={<CreateRecipe />} />
          <Route path='/saved-recipe' element={<SavedRecipes />} />
          <Route path='/auth' element={<Auth />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
