import React, { ReactElement } from 'react';
import Footer from '../src/components/Footer';

export default {
  component: Footer,
  title: 'Footer',
  includeStories: /.*Story$/,
  excludeStories: /.*Data$/,
};

export const DefaultStory = (): ReactElement => (
  <Footer />
);
