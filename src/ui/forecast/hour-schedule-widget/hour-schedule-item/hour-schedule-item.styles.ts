import { weekItemHoverBg } from '../../week-schedule/week-schedule-item/week-schedule-item.consts';

export const styles = {
  main_container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '30px',
  },
  content_wrapper: { display: 'flex', flexDirection: 'column', gap: '20px' },
  status_container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  week_button: {
    width: '100%',
    color: 'inherit',
    textTransform: 'none',
    margin: '0',
    fontSize: '1.1rem',
    padding: '0',
    '&:hover': {
      backgroundColor: weekItemHoverBg,
    },
  },
};
