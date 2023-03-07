import { nanoid } from 'nanoid';
import React, { Component } from 'react';

export class App extends Component {
  state = {
    name: '',
    contacts: [],
  };

  uniqId = nanoid();

  handleChange = ev => {
    const { name, value } = ev.target;
    this.setState({
      [name]: value,
    });
    this.setState({
      contacts: [{ name: value, id: this.uniqId }],
    });
    console.log(this.state);
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit({ ...this.state });
    this.setState({ name: '', number: '' });
    console.log(evt.target);
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
            value={this.state.name}
            onChange={this.handleChange}
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
