import classes from './MealItems.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CartContext from '../../store/cart-context';

const MealItem = (props) => {

    const price = `$${props.price.toFixed(2)}`;

    const cartCtx = useContext(CartContext);

    const addToCartHandler = (amount) => {
        cartCtx.addItem({
             id: props.id,
             name: props.name, 
             price: props.price,
             amount: amount
            });
    }
    return(
        <li>
            <div className={classes.meal}>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price} </div>
            </div>
            <div className={classes.form}>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )

}
export default MealItem;