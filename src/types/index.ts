export interface DrawerProps {
  anchor?:
    |'left'
    | 'right'
    | 'top'
    | 'bottom'; // Side from which the drawer will appear
  full?: boolean; // full width
}

export interface HeaderProps {
  fixed?: boolean; // position fixed/absolute
  color?:
    | 'primary'
    | 'secondary'
    | 'white'
    | 'black'
    | 'transparent'; // color theme
  logo?: boolean; // show/not Logo
  drawer?: DrawerProps;
}
