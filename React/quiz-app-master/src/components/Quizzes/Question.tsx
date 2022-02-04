import { FormControlLabel, Radio } from '@material-ui/core';
import React from 'react';
import { QuestionData } from '../../interfaces/question.interface';
import FormikRadioGroup from '../Formik/FormikRadioGroup';
import styles from './Question.module.css';

function Question({ text, answers }: QuestionData): JSX.Element {
  const answersToRender = answers.map((answer) => {
    return (
      <FormControlLabel
        key={answer}
        value={answer}
        control={<Radio />}
        label={answer}
      />
    );
  });

  return (
    <div className={styles.Question}>
      <h4>{text}</h4>
      <FormikRadioGroup name={text}>{answersToRender}</FormikRadioGroup>
    </div>
  );
}

export default Question;
