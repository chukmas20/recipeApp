import React from 'react'
import "./Recipe.css";

const RecipeTile = ({recipe}) => {
    return (
        
        <div className="recipeTile">
            <img src={recipe["recipe"]["image"]} className="recipeTile_image"/>
            <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>
        </div>
    )
}

export default RecipeTile
