import { blurBackground } from '../../common/styles/consts';
import { SxStyles } from '../../common/types/common';
const mainColor = 'rgba(218, 223, 225, 0.1)';

export const styles: SxStyles = {
  box_container: {
    borderTop: `3px solid ${mainColor}`,
    backgroundColor: mainColor,
    backdropFilter: blurBackground,
    borderRadius: '5px',
    boxShadow:
      'box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
  },
};
