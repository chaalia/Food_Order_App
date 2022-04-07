import { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../UI/Input';

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const EntredAmount = amountInputRef.current.value;
        const EntredAmountNumber  = +EntredAmount;

        if (
            EntredAmount.length === 0 ||
             EntredAmountNumber < 1 || 
             EntredAmountNumber > 5 )
            { setAmountIsValid(false);
                return;
        }
        props.onAddToCart(EntredAmountNumber);

    }
    return (
        <form className={classes.forms} onSubmit={submitHandler}>
            <Input 
                label="amount"
                ref= {amountInputRef}
                input={{
                type: 'number',
                min: '1',
                max: '10',
                step: '1',
                defaultValue: '1'
            }}/>
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-10)</p>}
        </form>
    );
}

export default MealItemForm;