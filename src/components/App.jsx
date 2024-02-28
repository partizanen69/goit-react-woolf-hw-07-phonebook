import { useEffect, useState } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { AppStyled } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
const CONTACTS_LOCAL_STORAGE_KEY = 'contacts';

export const App = () => {
  const [contacts, setContacts] = useState(null);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    let contacts = localStorage.getItem(CONTACTS_LOCAL_STORAGE_KEY);

    if (!contacts || contacts.length === 0) {
      contacts = [...initialContacts];
    } else {
      contacts = JSON.parse(contacts);
    }
    setContacts(contacts);
  }, []);

  useEffect(() => {
    if (contacts === null) {
      return;
    }

    if (contacts.length > 0) {
      localStorage.setItem(
        CONTACTS_LOCAL_STORAGE_KEY,
        JSON.stringify(contacts)
      );
    } else {
      localStorage.removeItem(CONTACTS_LOCAL_STORAGE_KEY);
    }
  }, [contacts]);

  const addNewContact = ({ name, number, onSuccess }) => {
    const nameLower = name.toLowerCase();
    const idx = contacts.findIndex(c => c.name.toLowerCase() === nameLower);
    if (idx > -1) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts([...contacts, newContact]);

    onSuccess();
  };

  const deleteContact = id => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  const handleFilterChange = value => {
    setFilter(value);
  };

  const filterLower = filter.toLocaleLowerCase();
  const filteredContacts =
    contacts?.filter(c => c.name.toLowerCase().includes(filterLower)) ?? [];

  return (
    <AppStyled>
      <div className="container">
        <h2 className="chapter-name">Phonebook</h2>
        <AddContactForm onSubmit={addNewContact} />
        <h2 className="chapter-name">Contacts</h2>
        <Filter value={filter} handleChange={handleFilterChange} />
        {filteredContacts.length > 0 && (
          <ContactList
            contacts={filteredContacts}
            deleteContact={deleteContact}
          />
        )}
      </div>
    </AppStyled>
  );
};
