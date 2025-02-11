import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styles } from './circular-with-lebel.style';

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number }
) => {
  return (
    <div>
      <Box sx={styles.circular_wrapper}>
        <Box sx={styles.circular_container}>
          <CircularProgress
            sx={styles.circular_progress}
            variant='determinate'
            size='100px'
            color='inherit'
            thickness={2}
            {...props}
          />
          <Box sx={styles.circular_box}>
            <Typography
              variant='h4'
              component='div'
              sx={styles.circular_typography}
            >{`${Math.round(props.value)}%`}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CircularProgressWithLabel;
