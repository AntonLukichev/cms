import React, { ReactElement } from 'react';
import Header from '../src/components/Header';

export default {
  component: Header,
  title: 'Header',
  includeStories: /.*Story$/,
  excludeStories: /.*Data$/,
};

export const DefaultStory = (): ReactElement => (
  <Header />
);
