import { quizData } from "@/Home/quizData";
import { createSlice } from "@reduxjs/toolkit";


export interface TquizData{
    question:typeof quizData,
    currentQuestionIndex:number,
    userAnswers:(string | null)[],
    quizComplete:boolean
}
export type Tquiz = {
  _id: string;
  title: string;
  description: string;
  questions: TquizData[];
  createdAt: string;
  updatedAt: string;
};
// type

const initialState: TquizData = {
  question: [],
  currentQuestionIndex: 0,
  userAnswers: Array(quizData.length).fill(null),
  quizComplete: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { questionIdx, answer } = action.payload;
      state.userAnswers[questionIdx] = answer;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.question.length - 1) {
        state.currentQuestionIndex += 1;
      }
    },
    prevQuestion: (state) => {
      if (state.currentQuestionIndex >= 1) {
        state.currentQuestionIndex -= 1;
      }
    },
    completeQuiz: (state) => {
      state.quizComplete = true;
    },
    setQuiz:(state,action)=>{
      state.question=action.payload;
    }
  },
});
export const { setAnswer, nextQuestion, prevQuestion,completeQuiz,setQuiz } = quizSlice.actions;
export default quizSlice.reducer;