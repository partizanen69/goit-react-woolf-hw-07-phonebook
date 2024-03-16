import { useDispatch, useSelector } from 'react-redux';
import { ContactListStyled } from './ContactList.styled';
import { selectContacts, selectFilter } from '../../store/selectors';
import { deleteContact, fetchContacts } from '../../store/operations';
import { useEffect } from 'react';

export const ContactList = () => {
  const { items: contacts } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterLower = filter.toLocaleLowerCase();
  const filteredContacts =
    contacts?.filter(c => c.name.toLowerCase().includes(filterLower)) ?? [];

  return (
    filteredContacts.length > 0 && (
      <ContactListStyled>
        <ul>
          {filteredContacts.map(contact => {
            const { name, phone, id } = contact;
            return (
              <li key={id}>
                <span>
                  {name}: {phone}{' '}
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
