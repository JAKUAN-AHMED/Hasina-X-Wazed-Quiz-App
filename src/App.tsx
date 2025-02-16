import Question from './Home/Question'
import QuizSummary from './Home/QuizSummary';
import { useAppSelector } from './redux/hook';

function App() {


  const { quizComplete } = useAppSelector((state) => state.quiz);

  return (
    <div>
      <h1 className="text-center text-5xl my-12">Hasina X Quiz App</h1>
      {!quizComplete ? <Question /> : <QuizSummary />}
    </div>
  );
}

export default App
