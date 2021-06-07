import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./counterSlice";

function Counter() {

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <section>
            <h4>Counter: { count }</h4>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </section>
    )
}

export default Counter;
