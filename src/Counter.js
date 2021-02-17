
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions";


function Counter() {

    const counter = useSelector(state => state.counter);

    const dispatch = useDispatch();


    return (
        <div >
            <p>Counter is: {counter} </p>
            <button onClick={()=>dispatch(decrement())}>-</button>    <button onClick={()=>dispatch(increment())}>+</button>
         
        </div>
    );
}

export default Counter;
