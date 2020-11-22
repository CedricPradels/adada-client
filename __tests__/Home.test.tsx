import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import Home from '../pages';

describe('<Home />', () => {
  it('Should be in document', () => {
    const { getByTestId } = render(<Home />);

    expect(getByTestId('test')).toBeInTheDocument();
  });
});
