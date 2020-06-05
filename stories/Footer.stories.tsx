import React, { ReactElement } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Footer from '../src/components/Footer';

export default {
  component: Footer,
  title: 'Footer',
  includeStories: /.*Story$/,
  excludeStories: /.*Data$/,
  decorators: [withA11y],
};

export const DefaultStory = (): ReactElement => (
  <Footer />
);
