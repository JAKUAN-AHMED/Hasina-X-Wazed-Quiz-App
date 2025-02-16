import { Button } from "@/components/ui/button";
import { nextQuestion, prevQuestion } from "@/redux/features/quiz/quizSlice";
import { useDispatch } from "react-redux";

export default function QuizControl() {

  const dispatch=useDispatch();
  const handleNextQustion=()=>{
    dispatch(nextQuestion());
  }
  const handlePrevQuestion=()=>{
    dispatch(prevQuestion())
  }
  return (
    <div className="flex justify-between mt-4 space-x-4">
      <Button onClick={handlePrevQuestion}>Prev</Button>
      <Button onClick={handleNextQustion}>Next</Button>
    </div>
  );
}