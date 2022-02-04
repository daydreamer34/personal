import { render, screen } from '@testing-library/react';
import Quiz from '../components/Quizzes/Quiz';
import { QuestionData } from '../interfaces/question.interface';

it('should render all the questions and their answers', () => {
  const questions: QuestionData[] = [
    {
      text: 'Whats 1+1?',
      answers: ['2', '3', 'Cat', '-1'],
      correctAnswer: '2',
    },
    {
      text: 'Foo',
      answers: ['Bar', 'Baz', 'Qux', 'Another'],
      correctAnswer: 'Bar',
    },
  ];

  render(<Quiz name="test" questions={questions} />);

  // Check if questions have been rendered
  expect(
    screen.getByRole('heading', { name: questions[0].text })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: questions[1].text })
  ).toBeInTheDocument();

  // Check if answers in both questions have been rendered
  expect(screen.getByLabelText(/cat/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/another/i)).toBeInTheDocument();
});
