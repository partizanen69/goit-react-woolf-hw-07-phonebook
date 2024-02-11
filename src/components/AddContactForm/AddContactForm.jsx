import { Component } from 'react';
import { AddContactFormStyled } from './AddContactForm.styled';
import { nanoid } from 'nanoid';

export class AddContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  nameInputId = nanoid();
  phoneInputId = nanoid();

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (!name) {
      alert('name can not be empty');
      return;
    }

    if (!number) {
      alert('number can not be empty');
      return;
    }

    this.props.onSubmit({
      name,
      number,
      onSuccess: () => {
        this.setState({ name: '', number: '' });
      },
    });
  };

  render() {
    return (
      <AddContactFormStyled>
        <label htmlFor={this.nameInputId}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            onChange={this.handleChange}
            value={this.state.name}
            required
          />
        </label>
        <label htmlFor={this.phoneInputId}>
          Phone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            onChange={this.handleChange}
            value={this.state.number}
            required
          />
        </label>
        <button
          type="button"
          className="add-contact-btn"
          onClick={this.handleSubmit}
        >
          Add contact
        </button>
      </AddContactFormStyled>
    );
  }
}
