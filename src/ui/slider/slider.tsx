import { Box, IconButton } from '@mui/material';
import React, { FC, useEffect, useRef, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import useWindowSize from '../../common/hooks/use-window-size';
import { styles } from './slider.styles';
import { defaultContainerMax } from './slider.consts';

interface Props {
  children: React.ReactNode;
  maxChildWidthInPx?: number;
}

const Slider: FC<Props> = ({
  children,
  maxChildWidthInPx: containerMax = defaultContainerMax,
}) => {
  const [move, setMove] = useState(0);
  const { width } = useWindowSize();
  const step = useRef(275);
  const maximumSteps = useRef(1);
  const limit = useRef(-containerMax);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    const containerWidth = ref.current.getBoundingClientRect().width;
    step.current = containerWidth;
    maximumSteps.current = containerMax / containerWidth;
  }, [ref.current, width]);

  const handleLeft = () => {
    if (move + step.current > 0) {
      return;
    }
    setMove((prevState) => (prevState += step.current));
  };

  const handleRight = () => {
    if (move + -step.current <= limit.current) {
      return;
    }
    setMove((prevState) => (prevState -= step.current));
  };

  return (
    <Box sx={styles.slider_container}>
      <Box>
        <IconButton onClick={handleLeft}>
          <ArrowBackIosNewIcon />
        </IconButton>
      </Box>
      <Box sx={styles.slider_content_wrapper}>
        <Box
          sx={{
            transition: '0.5s',
            transform: `translate3d(${move}px, 0px, 0px)`,
          }}
        >
          <div ref={ref}>{children}</div>
        </Box>
      </Box>
      <div>
        <IconButton onClick={handleRight}>
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </Box>
  );
};

export default Slider;
