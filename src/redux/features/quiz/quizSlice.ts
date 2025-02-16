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
    reducers:{
      setAnswer:(state,action)=>{
        const {questionIdx,answer}=action.payload;
        state.userAnswers[questionIdx]=answer;
      },
      nextQuestion:(state)=>{
      if( state.currentQuestionIndex<state.question.length-1 ) 
        {
          state.currentQuestionIndex+=1;
        }
      },
      prevQuestion:(state)=>{
      if( state.currentQuestionIndex>=1 ) 
        {
          state.currentQuestionIndex-=1;
        }
      }
    }
})
export const { setAnswer, nextQuestion, prevQuestion } = quizSlice.actions;
export default quizSlice.reducer;