import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

import savedContactsList from './savedContactsList.json'


function App() {
  const [contactsData, setContactsData] = useState(
    localStorage.getItem('usersData')
      ? JSON.parse(localStorage.getItem('usersData'))
      : [
        savedContactsList 
        ]
  );

  const [seacrhValue, setSeacrhValue] = useState('');

  const deleteContact = (id, evt) => {
    if (evt.target.nodeName !== 'BUTTON') return;

    setContactsData(prevState => {
      return prevState.filter(signleUser => signleUser.id !== id);
    });
  };

  const addContact = ({ username, phoneNumber }, actions) => {
    actions.resetForm();
    const userId = nanoid(5);
    setContactsData(prevState => {
      return [
        ...prevState,
        {
          id: userId,
          name: username,
          number: `${phoneNumber.substring(0, 3)}-${phoneNumber.substring(
            3,
            5
          )}-${phoneNumber.substring(5, 7)}`,
        },
      ];
    });
  };

  const resultsOfSearch = contactsData.filter(signleUser => {
    for (const userData in signleUser) {
      if (
        signleUser[userData]
          .toLowerCase()
          .includes(seacrhValue.toLowerCase().trim())
      )
        return true;
    }
  });

  useEffect(() => {
    localStorage.setItem('usersData', JSON.stringify(contactsData));
  }, [contactsData]);

  return (
    <div >
      <h1>Phonebook</h1>
      <ContactForm addUser={addContact} />
      <SearchBox filterUserData={setSeacrhValue} value={seacrhValue} />
      <ContactList
        contactsData={resultsOfSearch}
        deleteContact={deleteContact}
      />
    </div>
  );
}

export default App;
