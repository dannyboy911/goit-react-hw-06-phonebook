import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../slices/contactsSlice';
import styles from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <ul className={styles.contactListItems}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id}>
          {name}: {number} <span className={styles.copyOption}>Copy</span>
          <button
            className={styles.deleteButton}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
