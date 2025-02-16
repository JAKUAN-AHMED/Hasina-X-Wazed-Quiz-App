import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useGetAllQuizQuery } from "@/redux/api/quizApi";
import { setQuiz } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch } from "@/redux/hook";

export default function AllQuiz() {
  const {data,isLoading}=useGetAllQuizQuery(undefined);
  const dispatch=useAppDispatch();
  const handleSetQuiz=(qna:string)=>{
      dispatch(setQuiz(qna))
  }
  if(isLoading)
  {
    return <p>Loading...</p>
  }
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-center text:3xl md:text-4xl font-bold">All Quiz</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-8">
        {data.map((quiz:any, idx: string) => (
          <Card
            onClick={() => handleSetQuiz(quiz.questions)}
            className="w-[300px] space-x-2"
            key={idx}
          >
            <CardHeader>
              <CardTitle>{quiz.title}</CardTitle>
              <CardDescription>{quiz.description}</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
