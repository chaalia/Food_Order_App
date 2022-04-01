 import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;
    return(
        <li>
            <div className={classes.meal}>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price} </div>
            </div>
            <div className={classes.form}>
                <MealItemForm />
            </div>
        </li>
    )

}
export default MealItem;