export enum HeaderColors {
  primary = 'primary',
  secondary = 'secondary',
  white = 'white',
  transparent = 'transparent',
}

export interface HeaderProps {
  fixed?: boolean;
  color?: HeaderColors;
}
