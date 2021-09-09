import axios from "axios";
import "./App.css";
import {useState} from "react"
import RecipeTile from "./RecipeTile";

function App() {

  const [query, setQuery] = useState("");
  const [recipe, setRecipe] = useState([]);
  var url = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=ed1d8acd&app_key=fdbfaafb0db3286f11f0896e4c38fa18`
 
  const getRecipes = async()=>{
    const result = await axios.get(url);
     setRecipe(result.data.hits);
     console.log(result.data.hits);
  }
  const submit = (e)=>{
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="app">
        <h1 > Recipe App</h1>
        <form className="searchForm" onSubmit={submit}>
           <input type="text"  placeholder="enter food" value={query} 
            onChange={(e)=>setQuery(e.target.value)}  
            className="app_input"
            />
              <button type="submit" className="app_submit"> Search</button>
        </form>
        <div className="app_recipes">
           {recipe.map(recipe =>{
               return <RecipeTile  recipe={recipe} />
           })}
           <h1 className="make"> Make a search for Your preferred food Recipe</h1>
        </div>
    </div>
  );
}

export default App;
