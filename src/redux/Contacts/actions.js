import { nanoid } from 'nanoid';
import { ADD_CONTACT, REMOVE_CONTACT } from '../Contacts/constants';

export const addContact = ({ name, number }) => {
  console.log(name, number);
  return {
    type: ADD_CONTACT,
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = taskId => {
  return {
    type: REMOVE_CONTACT,
    payload: taskId,
  };
};
