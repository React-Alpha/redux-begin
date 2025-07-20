import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter/counterSlice";

export default function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      {/* 🧮 Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
    </>
  );
}
