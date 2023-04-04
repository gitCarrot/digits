import { Meteor } from 'meteor/meteor';
import { Contacts } from '../../api/contact/Contacts';

/* eslint-disable no-console */


const addContact = (contact) => {
  console.log(`  Adding: ${contact.lastName} (${contact.owner})`);
  Contacts.collection.insert(contact);
};

// Initialize the StuffsCollection if empty.
if (Contacts.collection.find().count() === 0) {
  if (Meteor.settings.defaultContacts) {
    console.log('Creating default data.');
    Meteor.settings.defaultContacts.forEach(contact => addContact(contact));
  }
}
