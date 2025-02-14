import {
  blurBackgroundDrawer,
  darkBackgroundColor,
  muiBorderColor,
  MUISpacePx,
} from '../../common/styles/consts';
import { SxStyles } from '../../common/types/common';

const maxWidth = '100%';
const width = '76%';

export const styles: SxStyles = {
  drawer_container: {
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  drawer_header: {
    backgroundColor: darkBackgroundColor,
    backdropFilter: blurBackgroundDrawer,
    $div: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderBottom: `1px solid ${muiBorderColor}`,
      padding: `${MUISpacePx} ${MUISpacePx}`,
    },
  },
  icons_container: {
    marginRight: '20px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
};

export const drawerProps = {
  drawer_paper: {
    style: {
      width: width,
      height: '80%',
      left: `calc((${maxWidth} - ${width}) / 2)`,
      backgroundColor: 'inherit',
    },
  },
};
