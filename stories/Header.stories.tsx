import React from 'react';
import Header from '../src/components/Header/Header';

export default {
  component: Header,
  title: 'Header',
  includeStories: /.*Story$/,

  excludeStories: /.*Data$/,
};

export const defaultStory = () => <Header />;
