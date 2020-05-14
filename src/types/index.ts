export interface DrawerProps {
  anchor?: 'left' | 'right' | 'top' | 'bottom'; // Side from which the drawer will appear
  full?: boolean; // full width
}

export enum HeaderColors {
  primary = 'primary',
  secondary = 'secondary',
  white = 'white',
  black = 'black',
  transparent = 'transparent',
}

export interface HeaderProps {
  fixed?: boolean; // position fixed/absolute
  color?: HeaderColors; // color theme
  logo?: boolean; // show/not Logo
  drawer?: DrawerProps;
}
