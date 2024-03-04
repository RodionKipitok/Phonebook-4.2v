import '../Contact/contact.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/Contacts/actions';

export default function Contacts() {
  const contacts = useSelector(state => state.contactReducer);
  const filter = useSelector(state => state.filterReducer.name);

  console.log(contacts);
  console.log(filter);
  const dispatch = useDispatch();

  const filteredItems = contacts.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h2 className="titleContact">Contacts</h2>
      <ul className="list">
        {filteredItems.map(contact => (
          <li className="contactItem" key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button
              className="btnContact"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
