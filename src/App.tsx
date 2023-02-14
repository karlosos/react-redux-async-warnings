import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { decrement, fetchCounterValue, increment, RootState } from "./store";

function App() {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state: RootState) => state.counter.fetchValueStatus === 'loading');
  const counter = useAppSelector((state: RootState) => state.counter.value);

  useEffect(() => {
    dispatch(fetchCounterValue());
  }, [dispatch])

  return (
    <div>
      <div>Count: {isLoading ? <LoadingSpinner /> : counter}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(fetchCounterValue())}>Refetch data</button>
    </div>
  );
}

const LoadingSpinner = () => <div data-testid='loading-spinner'>
  Loading...
</div>

export default App;
