import React, { Component } from 'react';
import ConstactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList ';
import { contactsData } from 'extendedData/contactsData';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: contactsData,
    filter: '',
  };

  addContactsList = ev => {
    console.log(ev);
    const { contacts } = this.state;
    const trueFilter = contacts.some(
      evt => evt.name.toLowerCase() === ev.name.toLowerCase()
    );
    if (trueFilter) {
      return alert(`${ev.name} is already in contacts.`);
    }
    ev = { ...ev, id: nanoid() };
    this.setState({ contacts: [ev, ...contacts] });
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const normalName = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalName)
    );
  };
  onFilterChange = ev => {
    this.setState({
      filter: ev.target.value,
    });
  };

  deletedContacts = nameId => {
    this.setState({
      contacts: this.state.contacts.filter(contact => contact.id !== nameId),
    });
  };
  render() {
    const filteredName = this.filterContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <ConstactForm onSubmit={this.addContactsList} />
        <h2>Contacts</h2>
        <Filter
          value={this.state.filter}
          onFilterChange={this.onFilterChange}
        />
        <ContactList
          onFilterContacts={filteredName}
          onChange={this.deletedContacts}
        />
      </div>
    );
  }
}
