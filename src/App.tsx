import Question from './Home/Question'
import QuizSummary from './Home/QuizSummary';
import { useAppSelector } from './redux/hook';
import AllQuiz from "./Home/AllQuiz";
function App() {


  const { quizComplete } = useAppSelector((state) => state.quiz);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl  my-12 font-bold">
        Hasina <span className='text-red-600'>X</span> Wazed Quiz App
      </h1>
      <AllQuiz></AllQuiz>
      {!quizComplete ? <Question /> : <QuizSummary />}
    </div>
  );
}

export default App
