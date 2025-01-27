// import bgImage from '../../assets/background_image/snow_bg_image.jpg';
import bgImage from '../../assets/background_image/rainy-bg-image.jpg';
import { styled } from '@mui/material';

export const Container = styled('div')({
  width: '100%',
  backgroundImage: `url(${bgImage})`,
  backgroundSize: 'cover',
});
