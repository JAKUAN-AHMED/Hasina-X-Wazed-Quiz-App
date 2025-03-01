import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { setAnswer } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import QuizControl from "./QuizControl";

export default function Question() {
  const {question,currentQuestionIndex,userAnswers}=useAppSelector((state)=>state.quiz);
  const currentQuestion=question[currentQuestionIndex];
  const currentAnswer=userAnswers[currentQuestionIndex];
  

  const dispatch=useAppDispatch();
  const handleAnswerChange=(answer:string)=>{
    dispatch(setAnswer({questionIdx:currentQuestionIndex,answer}));
  }


  return (
    <div className="flex justify-center">
      {question.length > 0 ? (
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle>{currentQuestion?.question}</CardTitle>
            <CardDescription>
              Question : {currentQuestionIndex + 1} of {question.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentQuestion.options.map((option, i) => (
              <Button
                key={i}
                onClick={() => handleAnswerChange(option)}
                size={"sm"}
                variant={option === currentAnswer ? "default" : "outline"}
                className="w-full mt-3"
              >
                {option}
              </Button>
            ))}

            <QuizControl></QuizControl>
          </CardContent>
        </Card>
      ) : (
        <></>
      )}
    </div>
  );
}
