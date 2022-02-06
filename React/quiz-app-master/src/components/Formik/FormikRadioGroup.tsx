import { RadioGroup } from '@material-ui/core';
import { FieldAttributes, useField } from 'formik';
import React from 'react';

function FormikRadioGroup({
  children,
  ...props
}: FieldAttributes<{}>): JSX.Element {
  const [field] = useField({ ...props, type: 'radio' });

  return <RadioGroup {...field}>{children}</RadioGroup>;
}

export default FormikRadioGroup;
