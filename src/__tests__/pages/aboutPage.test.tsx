import React from 'react';
import { render } from '@testing-library/react';

import AboutPage from '../../pages/about';

describe('About Page', () => {
  it('should render', () => {
    const rendered = render(<AboutPage />);
    expect(rendered.baseElement).toBeInTheDocument();
    expect(rendered.getByText('About page')).toBeTruthy();
  });
});
