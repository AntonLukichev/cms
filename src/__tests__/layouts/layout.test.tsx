import React from 'react';
import { render } from '@testing-library/react';

import Layout from '../../layouts';

describe('Layout', () => {
  it('should define layout', async () => {
    const { findByTestId } = render(<Layout />);
    const mainLayout = await findByTestId('mainLayout');
    expect(mainLayout).toBeInTheDocument();
  });
  it('should render with text', () => {
    const rendered = render(<Layout><span>test_render_text</span></Layout>);
    rendered.getByText('test_render_text');
  });
  it('should header and footer in document', async () => {
    const { findByTestId } = render(<Layout />);
    const header = await findByTestId('header');
    const footer = await findByTestId('footer');
    expect(header).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });
});
