import React from 'react';
import { render } from '@testing-library/react';

import IndexPage from '../../pages';

describe('Index page', () => {
  test('should render', () => {
    const rendered = render(<IndexPage />);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
