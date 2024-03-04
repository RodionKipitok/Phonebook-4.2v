import { ADD_CONTACT, REMOVE_CONTACT } from '../Contacts/constants';

export const contactReducer = (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case REMOVE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(item => item.id !== action.payload),
      };

    default:
      return state;
  }
};
