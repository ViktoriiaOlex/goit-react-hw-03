import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contactsData, deleteContact }) => {
  return (
    <ul className={styles.contactsList}>
      <Contact contactsData={contactsData} deleteContact={deleteContact} />
    </ul>
  );
};

export default ContactList;