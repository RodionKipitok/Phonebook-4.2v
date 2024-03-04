import { FILTERS_FILTER } from './constants';

const filtersInitialState = {
  name: '',
};

export const filterReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case FILTERS_FILTER:
      return {
        ...state,
        filter: {
          name: action.payload,
        },
      };

    default:
      return state;
  }
};
