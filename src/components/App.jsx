import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const { name, number } = this.state;
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: name, number: number, id: nanoid() },
      ],
    }));
    this.setState({ name: '', number: '' });
    console.log(this.state);
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalName)
    );
  };

  render() {
    const filteredName = this.filterContacts();
    console.log(filteredName);
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={nanoid()}>Name</label>
          <input
            type="text"
            name="name"
            id={nanoid()}
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label htmlFor={nanoid()}>Number</label>
          <input
            type="tel"
            name="number"
            id={nanoid()}
            value={this.state.number}
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <input
          type="text"
          name="filter"
          value={this.state.filter}
          onChange={this.handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <ul>
          {filteredName.map(el => (
            <li key={el.id}>
              <p>
                {el.name}: {el.number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
