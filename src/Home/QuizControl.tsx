import { Button } from "@/components/ui/button"; // Adjust path
import { completeQuiz, nextQuestion, prevQuestion } from "@/redux/features/quiz/quizSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";


const QuizControl = () => {
  const dispatch = useAppDispatch();
  const { currentQuestionIndex, question, userAnswers, quizComplete } =
    useAppSelector((state) => state.quiz);

  // Check if the current question has an answer selected
  const isAnswerSelected = userAnswers[currentQuestionIndex] !== null;

  // Handle the "Next" button click
  const handleNextQuestion = () => {
    if (isAnswerSelected) {
      dispatch(nextQuestion());
    }
  };

  // Handle the "Previous" button click
  const handlePreviousQuestion = () => {
    dispatch(prevQuestion());
  };

  // Handle the "Complete Quiz" button click
  const handleCompleteQuiz = () => {
    dispatch(completeQuiz());
  };

  // Check if all answers are selected for the last question
  const isCompleteEnabled =
    isAnswerSelected || currentQuestionIndex !== question.length - 1;

  return (
    <div className="flex justify-between mt-4 space-x-4">
      {/* Previous Button */}
      <Button
        onClick={handlePreviousQuestion}
        disabled={currentQuestionIndex === 0 || quizComplete}
      >
        Previous
      </Button>

      {/* Next Button */}
      {currentQuestionIndex < question.length - 1 && !quizComplete && (
        <Button onClick={handleNextQuestion} disabled={!isAnswerSelected}>
          Next
        </Button>
      )}

      {/* Complete Quiz Button */}
      {currentQuestionIndex === question.length - 1 && !quizComplete && (
        <Button onClick={handleCompleteQuiz} disabled={!isCompleteEnabled}>
          Complete Quiz
        </Button>
      )}
    </div>
  );
};

export default QuizControl;
