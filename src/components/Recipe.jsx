import { Bs0SquareFill } from "react-icons/bs";
import { Bs1SquareFill } from "react-icons/bs";
import { Bs2SquareFill } from "react-icons/bs";
import { Bs3SquareFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { RecipeInfo } from './RecipeInfo'

const icons = [Bs0SquareFill, Bs1SquareFill, Bs2SquareFill, Bs3SquareFill];

export const Recipe = (data) => {
    
    console.log(data)
    return <ul>
    {
          data.data.map((recipe, index) => {
            const Icon = icons[index] || null;
            return <li key={index}>
                    <RecipeInfo icon={ Icon }/>
                    <h2>{recipe.name}</h2>
                    <p>{recipe.time}</p>
                    <p>{recipe.servings}</p>
                    <p>{recipe.calories}</p>
                    <p>{recipe.difficulty}</p>
                    <img style={{width: '500px'}} src={recipe.image}/>
            </li>
        })
    }
    </ul>
}

Recipe.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]), // можно и так, если id разный
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      servings: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      calories: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      difficulty: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};