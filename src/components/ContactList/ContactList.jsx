import { ContactListStyled } from './ContactList.styled';

export const ContactList = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(filter)
  );

  return (
    <ContactListStyled>
      {filteredContacts && filteredContacts.length > 0 && (
        <ul>
          {filteredContacts.map(contact => {
            const { name, number, id } = contact;
            return (
              <li key={id}>
                <span>
                  {name}: {number}{' '}
                </span>
                <button onClick={() => deleteContact(id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      )}
    </ContactListStyled>
  );
};
