import { useAppDispatch, useAppSelector } from "./hooks";
import { decrement, increment, RootState } from "./store";

function App() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state: RootState) => state.counter.value);

  return (
    <div>
      <div>Hello application</div>
      <div>Count: {counter}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
