import styles from './Icon.module.css'

export const RecipeInfo = ({ icon: Icon }) => {
  return (
    <div>
        {Icon && <Icon className={styles.icon} size={24} />}
    </div>
  );
};