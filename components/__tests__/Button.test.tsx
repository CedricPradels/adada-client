import React from 'react';
import '@testing-library/jest-dom';
import { cleanup, render, fireEvent } from '@testing-library/react';

import { Button, testId, ButtonProps } from '../Button';

const content = 'Click Here';
const defaultProps: {
  [k in ButtonProps['tag']]: Omit<ButtonProps, 'onClick'>;
} = {
  anchor: {
    tag: 'anchor',
  },
  button: {
    tag: 'button',
  },
};
const parseTag: { [k in ButtonProps['tag']]: string } = {
  anchor: 'A',
  button: 'BUTTON',
};

const allTags: ButtonProps['tag'][] = ['anchor', 'button'];

describe('<Button />', () => {
  afterEach(cleanup);

  it('Should be in document', () => {
    allTags.forEach((tag) => {
      const { getByTestId } = render(
        <Button {...defaultProps[tag]}>{content}</Button>
      );
      expect(getByTestId(testId.container)).toBeInTheDocument();
      cleanup();
    });
  });

  it('Should display content', () => {
    allTags.forEach((tag) => {
      const { getByTestId } = render(
        <Button {...defaultProps[tag]}>{content}</Button>
      );
      expect(getByTestId(testId.container)).toHaveTextContent(content);
      cleanup();
    });
  });

  it('Should adapt container tag to type property', () => {
    allTags.forEach((tag) => {
      const { getByTestId } = render(
        <Button {...defaultProps[tag]}>{content}</Button>
      );
      expect(getByTestId(testId.container).tagName).toBe(parseTag[tag]);
      cleanup();
    });
  });

  it('Should call onClick callback', () => {
    allTags.forEach((tag) => {
      const callback = jest.fn();
      const { getByTestId } = render(
        <Button {...defaultProps[tag]} onClick={callback}>
          {content}
        </Button>
      );
      expect(callback).not.toBeCalled();
      // fire event
      fireEvent.click(getByTestId(testId.container));
      expect(callback).toBeCalled();
      cleanup();
    });
  });
});
