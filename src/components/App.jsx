import { Component } from 'react';
import { AddContactForm } from './AddContactForm/AddContactForm';
import { nanoid } from 'nanoid';
import { AppStyled } from './App.styled';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addNewContact = ({ name, number, onSuccess }) => {
    const idx = this.state.contacts.findIndex(c => c.name === name);
    if (idx > -1) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState({
      contacts: [...this.state.contacts, newContact],
    });

    onSuccess();
  };

  deleteContact = id => {
    const newContacts = this.state.contacts.filter(c => c.id !== id);
    this.setState({ contacts: newContacts });
  };

  handleFilterChange = value => {
    this.setState({ filter: value });
  };

  render() {
    return (
      <AppStyled>
        <div className="container">
          <h2 className="chapter-name">Phonebook</h2>
          <AddContactForm onSubmit={this.addNewContact} />
          <h2 className="chapter-name">Contacts</h2>
          <Filter
            value={this.state.filter}
            handleChange={this.handleFilterChange}
          />
          <ContactList
            contacts={this.state.contacts}
            filter={this.state.filter}
            deleteContact={this.deleteContact}
          />
        </div>
      </AppStyled>
    );
  }
}
