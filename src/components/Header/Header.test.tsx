import React from 'react';
import {
  render,
  cleanup,
} from '@testing-library/react';

import Header from './index';
import { HeaderColors } from '../../types';

describe('Header', () => {
  afterEach(cleanup);

  it('render Header', async () => {
    const { findByTestId } = render(<Header />);
    const header = await findByTestId('header');
    expect(header).toBeInTheDocument();
    expect(header.className).toMatch(/makeStyles-fixed/i);
    expect(header.className).not.toMatch(/makeStyles-absolute/i);
  });

  it('should render with absolute props', async () => {
    const { findByTestId } = render(
      <Header
        fixed={false}
      />
    );
    const header = await findByTestId('header');
    expect(header.className).toMatch(/makeStyles-absolute/i);
  });

  it('should render with white color props', async () => {
    const { findByTestId } = render(
      <Header
        color={HeaderColors.white}
      />
    );
    const header = await findByTestId('header');
    expect(header.className).toMatch(/makeStyles-white/i);
  });
});
