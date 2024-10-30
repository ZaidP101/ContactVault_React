import React, { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem(LOCAL_STORAGE_KEY);
    return savedContacts ? JSON.parse(savedContacts) : [];
  });

  const addcontacthandler = (contact) => {
    const newContact = { id: uuidv4(), ...contact }; 
    setContacts((prevContacts) => [...prevContacts, newContact]); 
  };

  const removecontacthandler =(id)=>{
    const newcontactlist = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newcontactlist);
  }
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addcontacthandler={addcontacthandler} />
      <ContactList contacts={contacts} getContactId={removecontacthandler}/>
    </div>
  );
}

export default App;
