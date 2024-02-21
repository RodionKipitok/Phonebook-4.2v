import { nanoid } from 'nanoid';

export const addContact = ({ name, number }) => {
  return {
    type: 'Contact/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = taskId => {
  return {
    type: 'Contact/deleteContact',
    payload: taskId,
  };
};

export const setStatusFilter = value => {
  return {
    type: 'filters/Filter',
    payload: value,
  };
};
