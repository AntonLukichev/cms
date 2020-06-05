import React, { ReactElement } from 'react';
import { withA11y } from '@storybook/addon-a11y';
import Header from '../src/components/Header';
import { HeaderProps } from '../src/types';

export default {
  component: Header,
  title: 'Header',
  includeStories: /.*Story$/,
  excludeStories: /.*Data$/,
  decorators: [withA11y],
};

export const DefaultStory = (): ReactElement => (
  <Header />
);

export const HeaderSecondaryNoFixedStory = (): ReactElement<HeaderProps> => (
  <Header
    color="secondary"
    fixed={false}
  />
);

export const HeaderWhiteStory = (): ReactElement<HeaderProps> => (
  <Header
    color="white"
  />
);

export const HeaderBlackStory = (): ReactElement<HeaderProps> => (
  <Header
    color="black"
  />
);

export const HeaderTransparentStory = (): ReactElement<HeaderProps> => (
  <Header
    color="transparent"
  />
);

export const HeaderDrawerLeftStory = (): ReactElement<HeaderProps> => (
  <Header
    drawer={{
      anchor: 'left',
    }}
  />
);

export const HeaderDrawerFullStory = (): ReactElement<HeaderProps> => (
  <Header
    drawer={{
      full: true
    }}
  />
);
