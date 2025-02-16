import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quiz/quizSlice";
import { quizApi } from "./api/quizApi";
export const store = configureStore({
  reducer: {
    quiz: quizReducer,
    [quizApi.reducerPath]: quizApi.reducer,
  },
  middleware:(getDefaultMiddleware)=>{
    return getDefaultMiddleware().concat(quizApi.middleware);
  }
});

// types
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export type AppStore = typeof store;