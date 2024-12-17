import { store } from '../../store/store';

export type IRootState = ReturnType<typeof store.getState>;
