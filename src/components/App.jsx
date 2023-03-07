import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleChange = ev => {
    const { name, value, number } = ev.target;
    this.setState({
      [name]: value,
      [number]: value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        { name: this.state.name, number: this.state.number, id: nanoid() },
      ],
    }));
    form.reset();
    console.log(this.state);
  };

  render() {
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
            onChange={this.handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(el => (
            <li key={el.id}>
              <p>
                {el.name}:{el.number}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
