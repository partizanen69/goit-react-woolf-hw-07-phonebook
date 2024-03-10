import { useDispatch, useSelector } from 'react-redux';
import { ContactListStyled } from './ContactList.styled';
import { deleteContact } from '../../store/contactsSlice';

export const ContactList = () => {
  const { contacts } = useSelector(state => {
    return state.contacts;
  });
  const { filter } = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filterLower = filter.toLocaleLowerCase();
  const filteredContacts =
    contacts?.filter(c => c.name.toLowerCase().includes(filterLower)) ?? [];

  return (
    filteredContacts.length > 0 && (
      <ContactListStyled>
        <ul>
          {filteredContacts.map(contact => {
            const { name, number, id } = contact;
            return (
              <li key={id}>
                <span>
                  {name}: {number}{' '}
                </span>
                <button onClick={() => dispatch(deleteContact(id))}>
                  Delete
                </button>
              </li>
            );
          })}
        </ul>
      </ContactListStyled>
    )
  );
};
