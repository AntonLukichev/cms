export interface DrawerProps {
  anchor?: 'left' | 'right' | 'top' | 'bottom'; // Side from which the drawer will appear
  full?: boolean; // full width
}

export type HeaderColorsType =
  | 'primary'
  | 'secondary'
  | 'white'
  | 'black'
  | 'transparent';

export interface HeaderProps {
  fixed?: boolean; // position fixed/absolute
  color?: HeaderColorsType; // color theme
  logo?: boolean; // show/not Logo
  drawer?: DrawerProps;
}
