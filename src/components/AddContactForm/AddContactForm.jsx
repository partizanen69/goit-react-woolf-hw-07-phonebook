import { useState } from 'react';
import { AddContactFormStyled } from './AddContactForm.styled';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/operations';

const nameInputId = nanoid();
const phoneInputId = nanoid();

export const AddContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (!name) {
      alert('name can not be empty');
      return;
    }

    if (!number) {
      alert('number can not be empty');
      return;
    }

    dispatch(addContact({ name, phone: number }));

    setName('');
    setNumber('');
  };

  return (
    <AddContactFormStyled>
      <label htmlFor={nameInputId}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={e => setName(e.target.value.trim())}
          value={name}
          required
          id={nameInputId}
        />
      </label>
      <label htmlFor={phoneInputId}>
        Phone
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={e => setNumber(e.target.value.trim())}
          value={number}
          required
          id={phoneInputId}
        />
      </label>
      <button type="button" className="add-contact-btn" onClick={handleSubmit}>
        Add contact
      </button>
    </AddContactFormStyled>
  );
};
