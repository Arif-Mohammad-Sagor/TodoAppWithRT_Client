import { configureStore } from "@reduxjs/toolkit";
import TodosReducer from "./features/TodoSlice";
import { baseApi } from "./api/baseApi";

export const store = configureStore({
  reducer: {
    todos: TodosReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
