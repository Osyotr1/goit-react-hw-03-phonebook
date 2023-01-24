import { nanoid } from "nanoid";
import React, {Component} from "react";
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  createContact = ({ name, number }) => {

    const checkName = this.state.contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    const checkNumber = this.state.contacts.find(contact => contact.number === number);

    if(checkName){
      return alert(`${name} is already in contacts.`);
    };

    if(checkNumber){
      return alert(`This phone number is already in use.`);
    }
    
    const contact = {
      name,
      number,
      id: nanoid(),
    }
    this.setState(prevState =>({contacts: [contact, ...prevState.contacts]}))
  }

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value })
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }))
  }

  render() {
    const { contacts, filter } = this.state;
    const filterNormalized = filter.toLowerCase();
    const showContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filterNormalized));

    return(
    <>
    <section>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.createContact}/>
      <h2>Contacts</h2>
      <Filter value={this.state.filter} onChange={this.changeFilter}/>  
      <ContactList contacts={showContacts} onDelete={this.deleteContact}/>
    </section>
      
    </>
    
    )
  }
}

export default App;