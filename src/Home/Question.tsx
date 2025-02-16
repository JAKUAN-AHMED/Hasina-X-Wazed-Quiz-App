import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAppSelector } from "@/redux/hook";

export default function Question() {
  const {question,currentQuestionIndex}=useAppSelector((state)=>state.quiz);
  const currentQuestion=question[currentQuestionIndex];
  return (
    <div className="flex justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>{currentQuestion.question}</CardTitle>
          <CardDescription>
            Question : {currentQuestionIndex+1} of {question.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
         {
          currentQuestion.options.map((option,i)=>
          <Button key={i} size={"sm"} className="w-full mt-3">
            {option}
          </Button>
          )
         }
        </CardContent>
        <CardFooter className="flex justify-between">
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
}
