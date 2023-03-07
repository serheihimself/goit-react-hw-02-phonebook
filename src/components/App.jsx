import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  uniqId = nanoid();

  onHandleSubmit = ev => {
    ev.preventDefault();
    const form = ev.currentTarget;
    this.setState({
      contacts: [
        { name: ev.currentTarget.elements.name.value },
        { id: this.uniqId },
      ],
      name: ev.currentTarget.elements.name.value,
    });
    console.log(this.state);
    form.reset();
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <form onSubmit={this.onHandleSubmit}>
          <label htmlFor={this.uniqId}>Name</label>
          <input
            type="text"
            name="name"
            id={this.uniqId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <button type="submit">Add contact</button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {this.state.contacts.map(el => (
            <li key={el.id}>
              <p>{el.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
