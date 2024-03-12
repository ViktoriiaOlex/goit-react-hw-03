import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

import css from './Contact.module.css';

const Contact = ({ contactsData, deleteContact }) => {
  return contactsData.map(({ id, name, number }) => {
    return (
      <li
        key={id}
        className={css.userItem}
        onClick={evt => deleteContact(id, evt)}
      >
        <div>
          <div className={css.nameContainer}>
            <FaUser />
            <p>{name}</p>
          </div>
          <div className={css.phoneContainer}>
            <FaPhone />
            <p>{number}</p>
          </div>
        </div>

        <button type="button" className={css.deleteButton}>
          Delete
        </button>
      </li>
    );
  });
};

export default Contact;