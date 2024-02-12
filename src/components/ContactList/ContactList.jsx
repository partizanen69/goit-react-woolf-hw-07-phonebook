import { ContactListStyled } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListStyled>
      <ul>
        {contacts.map(contact => {
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
    </ContactListStyled>
  );
};
