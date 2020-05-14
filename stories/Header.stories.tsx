import React, { FC, ReactElement } from 'react';
import Header from '../src/components/Header';
import { HeaderColors, HeaderProps } from '../src/types';

type ComponentWrapperProps = {
  style?: object;
}

export default {
  component: Header,
  title: 'Header',
  includeStories: /.*Story$/,
  excludeStories: /.*Data$/,
};

const ComponentWrapper: FC<ComponentWrapperProps> = ({ children, style = {} }): ReactElement => (
  <div style={{ height: 3000, ...style }}>
    {children}
  </div>
);

export const DefaultStory = (): ReactElement => (
  <ComponentWrapper>
    <Header />
  </ComponentWrapper>
);

export const HeaderSecondaryNoFixedStory = (): ReactElement<HeaderProps> => (
  <ComponentWrapper>
    <Header
      color={HeaderColors.secondary}
      fixed={false}
    />
  </ComponentWrapper>
);

export const HeaderWhiteStory = (): ReactElement<HeaderProps> => (
  <ComponentWrapper style={{ backgroundColor: '#fff' }}>
    <Header
      color={HeaderColors.white}
    />
  </ComponentWrapper>
);

export const HeaderBlackStory = (): ReactElement<HeaderProps> => (
  <ComponentWrapper style={{ backgroundColor: '#fff' }}>
    <Header
      color={HeaderColors.black}
    />
  </ComponentWrapper>
);

export const HeaderTransparentStory = (): ReactElement<HeaderProps> => (
  <ComponentWrapper>
    <Header
      color={HeaderColors.transparent}
    />
  </ComponentWrapper>
);

export const HeaderDrawerLeftStory = (): ReactElement<HeaderProps> => (
  <ComponentWrapper>
    <Header
      drawer={{
        anchor: 'left',
      }}
    />
  </ComponentWrapper>
);

export const HeaderDrawerFullStory = (): ReactElement<HeaderProps> => (
  <ComponentWrapper>
    <Header
      drawer={{
        full: true
      }}
    />
  </ComponentWrapper>
);
