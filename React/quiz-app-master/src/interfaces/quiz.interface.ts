import { QuestionData } from './question.interface';

export interface QuizData {
  name: string;
  questions: QuestionData[];
}
