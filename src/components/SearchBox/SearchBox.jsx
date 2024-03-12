import { useId } from 'react';

import styles from './SearchBox.module.css';

const SearchBox = ({ filterUserData, value }) => {
  const searchId = useId();

  return (
    <div className={styles.seacrchForm}>
      <label htmlFor={searchId}>Find contacts by name</label>
      <input
        className={styles.searchInput}
        type="text"
        id={searchId}
        onChange={evt => filterUserData(evt.target.value)}
        value={value}
      />
    </div>
  );
};

export default SearchBox;