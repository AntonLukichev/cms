import React from 'react';
import { render } from '@testing-library/react';

import Header from '../../components/Header';

describe('Header', () => {
  test('render Header', async () => {
    const { findByTestId } = render(<Header />);
    const footer = await findByTestId('header');
    expect(footer).toBeInTheDocument();
  });
});
