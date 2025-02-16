import { quizData } from "@/Home/quizData";
import { createSlice } from "@reduxjs/toolkit";

// type
interface Tquiz{
    question:typeof quizData,
    currentQuestionIndex:number,
    userAnswers:(string | null)[],
    quizComplete:boolean
}

const initialState: Tquiz = {
  question: quizData,
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null),
  quizComplete: false,
};

const quizSlice=createSlice({
    name:"quiz",
    initialState,
    reducers:{}
})
export default quizSlice.reducer;