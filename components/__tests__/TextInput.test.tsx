import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import { TextInput, testIds } from '../TextInput';

describe('<TextInput />', () => {
  it('Should be in document', () => {
    const { getByTestId } = render(
      <TextInput
        onChange={() => {}}
        initialValue="val"
        label="label"
        type="text"
      />
    );
    expect(getByTestId(testIds.container)).toBeInTheDocument();
  });

  it('Should have tag "input"', () => {
    const { getByTestId } = render(
      <TextInput onChange={() => {}} initialValue="val" type="text" />
    );
    expect(getByTestId(testIds.input)).toBeInTheDocument();
    expect(getByTestId(testIds.input).tagName).toBe('INPUT');
  });

  it('Should have tag "label" if label prop is provided', () => {
    const { queryByTestId, rerender } = render(
      <TextInput
        onChange={() => {}}
        initialValue="val"
        type="text"
        label={'label'}
      />
    );

    expect(queryByTestId(testIds.label)).toBeInTheDocument();
    expect(queryByTestId(testIds.label)?.tagName).toBe('LABEL');
    rerender(<TextInput onChange={() => {}} initialValue="val" type="text" />);
    expect(queryByTestId(testIds.label)).toBeNull();
  });
});
