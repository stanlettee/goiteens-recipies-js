import { Bs0SquareFill } from "react-icons/bs";
import { Bs1SquareFill } from "react-icons/bs";
import { Bs2SquareFill } from "react-icons/bs";
import { Bs3SquareFill } from "react-icons/bs";
import PropTypes from "prop-types";
import { RecipeInfo } from './RecipeInfo'
import styles from './Recipe.module.css'

const icons = [Bs0SquareFill, Bs1SquareFill, Bs2SquareFill, Bs3SquareFill];

export const Recipe = (data) => {
    
    console.log(data)
    return <ul className={styles.list}>
    {
          data.data.map((recipe, index) => {
            const Icon = icons[index] || null;
            return <li className={styles.item} key={index}>
                    <RecipeInfo icon={ Icon }/>
                    <h2 className={styles.title}>{recipe.name}</h2>
                    <ul className={styles.listP}>
                      <li className={styles.itemP}><p>Time: {recipe.time}</p></li>
                      <li className={styles.itemP}><p>Servings: {recipe.servings}</p></li>
                      <li className={styles.itemP}><p>Calories: {recipe.calories}</p></li>
                      <li className={styles.itemP}><p>Difficulty: {recipe.difficulty}</p></li>
                    </ul>
                    <img className={styles.img} src={recipe.image}/>
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