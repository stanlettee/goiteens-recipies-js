import { Bs0SquareFill } from "react-icons/bs";
import { Bs1SquareFill } from "react-icons/bs";
import { Bs2SquareFill } from "react-icons/bs";
import { Bs3SquareFill } from "react-icons/bs";

export const Recipe = (data) => {
    
    console.log(data)
    return <ul>
    {
          data.data.map((recipe) => {
            return <li>
                    {
                        
                    }
                    <h2>{recipe.name}</h2>
                    <p>{recipe.time}</p>
                    <p>{recipe.servings}</p>
                    <p>{recipe.calories}</p>
                    <p>{recipe.difficulty}</p>
                    <img src={recipe.image}/>
            </li>
        })
    }
    </ul>
}