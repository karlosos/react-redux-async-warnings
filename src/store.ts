import {
  AnyAction,
  configureStore,
  createSlice,
  PayloadAction,
  ThunkAction,
} from "@reduxjs/toolkit";
import Api from "./fakeApi";

// **************
// Slice
// **************
interface CounterState {
  value: number | undefined;
  fetchValueStatus: "idle" | "loading" | "succeeded" | "failed";
  fetchStatusError: string | null;
}

export const counterInitialState: CounterState = {
  value: undefined,
  fetchValueStatus: "idle",
  fetchStatusError: null,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.value = (state.value ?? 0) + 1;
    },
    decrement: (state) => {
      state.value = (state.value ?? 0) - 1;
    },
    incrementByAmount: (state, action) => {
      state.value = (state.value ?? 0) + action.payload;
    },
    fetchValueStart: (state) => {
      state.fetchValueStatus = "loading";
    },
    fetchValueSuccess: (state, action: PayloadAction<number>) => {
      state.fetchValueStatus = "succeeded";
      state.value = action.payload;
    },
    fetchValueError: (state, action: PayloadAction<string>) => {
      state.fetchValueStatus = "failed";
      state.fetchStatusError = action.payload;
    },
  },
});

export const {
  increment,
  decrement,
  incrementByAmount,
  fetchValueStart,
  fetchValueSuccess,
  fetchValueError,
} = counterSlice.actions;

export const fetchCounterValue = (): AppThunk => async (dispatch, getState) => {
  if (getState().counter.fetchValueStatus === "loading") {
    return;
  }

  dispatch(fetchValueStart());
  try {
    const result = await Api.getValue();
    dispatch(fetchValueSuccess(result));
  } catch (e) {
    dispatch(fetchValueError('Could not fetch the data'));
  }
};

export const counterReducer = counterSlice.reducer;

// **************
// Store
// **************
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
