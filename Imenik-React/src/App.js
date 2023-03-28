import React from 'react';
import './App.css';
import logo from "./logo.svg";
import NewContact from "./components/new-contact/NewContact";
import PhoneDirectory from "./components/phone-directory/PhoneDirectory";
import DirectoryItem from "./model/DirectoryItem";
import Directory from "./model/Directory";


class App extends React.Component {
    constructor(props) {
        super(props);

        this.directory = new Directory();

        this.state = {
            contacts: this.directory.contacts
        }

        this.createContact = this.createContact.bind(this);
        this.changeContactState = this.changeContactState.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }

    createContact(contentName, contentPhone) {
        let contact = new DirectoryItem(contentName, contentPhone, new Date());
        let contacts = this.directory.add(contact);

        this.setState({ contacts: contacts });
    }

    changeContactState(contact) {
        let contacts = this.directory.changeState(contact);
        this.setState({ contacts: contacts });
    }

    deleteContact(contact) {
        let contacts = this.directory.delete(contact);
        this.setState({ contacts: contacts });
    }

    render() {
        return (<div id="app" >
            <img src={logo} className="App-logo" alt="logo" />
            <NewContact createContact={this.createContact}></NewContact>
            <PhoneDirectory contacts={this.state.contacts} onDeleteContact={this.deleteContact}></PhoneDirectory>
        </div>)
    }

}

export default App;