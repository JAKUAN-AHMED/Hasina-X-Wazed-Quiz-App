import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./features/quiz/quizSlice";
export const store=configureStore({
    reducer:{
        quiz:quizReducer
    }
})

// types
export type RootState=ReturnType<typeof store.getState>;
export type AppDispatch=typeof store.dispatch;
export type AppStore = typeof store;