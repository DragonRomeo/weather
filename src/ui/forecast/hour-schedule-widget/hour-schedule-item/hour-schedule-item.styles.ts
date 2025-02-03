import { weekItemHoverBg } from '../../week-schedule/week-schedule-item/week-schedule-item.consts';

export const styles = {
  main_container: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '30px',
  },
  content_wrapper: { display: 'flex', flexDirection: 'row', gap: '20px' },
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
