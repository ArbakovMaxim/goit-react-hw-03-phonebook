import { nanoid } from 'nanoid';
import { Component } from 'react';
import { Container } from 'ui/Container.styled';
import { Contacts } from './components/Contacts/Contacts';
import { FormName } from './components/Form/Form';
import { Section } from 'ui/Section/Section';
import { Filter } from 'components/Filter/Filter';

const LS_key = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem(LS_key));
    if (localContacts !== null) {
      this.setState({
        contacts: localContacts,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const newState = JSON.stringify(this.state.contacts);
    if (prevState.contact !== this.state.contacts) {
      localStorage.setItem('contacts', newState);
    }
  }

  addContact = (name, number) => {
    let existsName = false;
    const normlezedName = name.toLocaleLowerCase();
    this.state.contacts.forEach(el => {
      if (el.name.toLocaleLowerCase() === normlezedName) {
        alert(`${name} is already in contacts`);
        existsName = true;
      }
    });

    if (existsName === true) {
      return;
    }
    const newContact = { id: nanoid(), name, number };
    this.setState(prevState => {
      return {
        contacts: [...prevState.contacts, newContact],
      };
    });
  };

  changeFilter = event => {
    this.setState({
      filter: event.currentTarget.value,
    });
  };

  filterContact = () => {
    const normolizedFiltr = this.state.filter.toLocaleLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normolizedFiltr)
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const resyltFilter = this.filterContact();
    return (
      <Container>
        <Section title="PhoneBook">
          <FormName addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter changeFilter={this.changeFilter} value={this.state.filter} />
          <Contacts
            contacts={resyltFilter}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </Container>
    );
  }
}
