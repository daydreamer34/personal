import React from 'react';
import styles from '../assets/App.module.css';
import { QuestionData } from '../interfaces/question.interface';
import Quiz from './Quizzes/Quiz';

function App(): JSX.Element {
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
  return (
    <div className={styles.App}>
      <h1>Cool Quiz App</h1>
      <Quiz name="A Cool Quiz" questions={questions} />
    </div>
  );
}

export default App;
