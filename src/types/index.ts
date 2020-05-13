export enum HeaderColors {
  primary = 'primary',
  secondary = 'secondary',
  white = 'white',
  black = 'black',
  transparent = 'transparent',
}

export interface HeaderProps {
  fixed?: boolean;
  color?: HeaderColors;
}
