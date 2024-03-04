import { FILTERS_FILTER } from './constants';

export const setStatusFilter = value => {
  return {
    type: FILTERS_FILTER,
    payload: value,
  };
};
