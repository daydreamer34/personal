import { Button, Radio } from '@material-ui/core';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form, Formik } from 'formik';
import React from 'react';
import FormikRadioGroup from '../components/Formik/FormikRadioGroup';

it('submits the form with the selected value', async () => {
  const handleSubmit = jest.fn();
  const initialValues = { test: '' };
  const expectedValues = { test: 'bar' };

  render(
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <FormikRadioGroup name="test">
            <Radio value="foo" />
            <Radio value="bar" />
            <Radio value="baz" />
          </FormikRadioGroup>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );

  userEvent.click(screen.getByDisplayValue('bar'));
  userEvent.click(screen.getByRole('button'));

  await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
  expect(handleSubmit).toHaveBeenCalledWith(expectedValues, expect.anything());
});

it('submits the form with the selected values from multiple radio groups', async () => {
  const handleSubmit = jest.fn();
  const initialValues = { test: '', animal: '', food: '' };
  const expectedValues = { test: 'baz', animal: 'turtle', food: 'spaghetti' };

  render(
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <FormikRadioGroup name="test">
            <Radio value="foo" />
            <Radio value="bar" />
            <Radio value="baz" />
          </FormikRadioGroup>
          <FormikRadioGroup name="animal">
            <Radio value="cat" />
            <Radio value="dog" />
            <Radio value="turtle" />
          </FormikRadioGroup>
          <FormikRadioGroup name="food">
            <Radio value="pizza" />
            <Radio value="spaghetti" />
            <Radio value="sushi" />
          </FormikRadioGroup>
          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );

  // Simulate many alternating user clicks
  userEvent.click(screen.getByDisplayValue('foo'));
  userEvent.click(screen.getByDisplayValue('cat'));
  userEvent.click(screen.getByDisplayValue('baz'));
  userEvent.click(screen.getByDisplayValue('spaghetti'));
  userEvent.click(screen.getByDisplayValue('turtle'));
  userEvent.click(screen.getByRole('button'));

  await waitFor(() => expect(handleSubmit).toHaveBeenCalledTimes(1));
  expect(handleSubmit).toHaveBeenCalledWith(expectedValues, expect.anything());
});
