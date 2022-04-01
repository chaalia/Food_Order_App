import classes from './Cart.module.css';
import Modal from '../UI/Modal';


const Cart = ( props ) => {
    const cartItems= <ul className={classes['cart-items']}>{[{
        id: 'm1', name: 'Sushi', description: 'Finest fish and veggies', price: 22.99,
    }].map((item) => <li key={item.id}>{item.name}</li>
    )}</ul>

    return (
        <Modal onHidecart={props.onHidecart}>
            {cartItems}
                <div className={classes.total}>
                    <span>Totam amount</span>
                    <span>$20.00</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button-alt']} onClick={props.onHidecart}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
        </Modal>
    );
    }
export default Cart;