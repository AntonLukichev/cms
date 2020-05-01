import React from 'react';
import { render } from '@testing-library/react';

import Layout from '../layouts';

describe('Layout', () => {
  test('should define layout', async () => {
    const { findByTestId } = render(<Layout />);
    const mainLayout = await findByTestId('mainLayout');
    expect(mainLayout).toBeInTheDocument();
  });
});
