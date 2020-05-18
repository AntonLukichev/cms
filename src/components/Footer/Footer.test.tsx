import React from 'react';
import { render } from '@testing-library/react';

import Footer from './index';

describe('Footer', () => {
  test('render Footer', async () => {
    const { findByTestId } = render(<Footer />);
    const footer = await findByTestId('footer');
    expect(footer).toBeInTheDocument();
  });
});
