import React, { useState } from 'react';
import styles from './Header.module.css';
import down from "../../assets/down.svg";
import display from "../../assets/Display.svg";

const Header = ({ grouping, setGrouping, ordering, setOrdering }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
 
  const handleGroupingChange = (e) => {
    setGrouping(e.target.value);
    localStorage.setItem("grouping",e.target.value);
  };

  const handleOrderingChange = (e) => {
    setOrdering(e.target.value);
    localStorage.setItem("ordering",e.target.value);
  };

  return (
    <div className={styles.header}>
      <button className={styles.displayButton} onClick={toggleDropdown}>
        <span className={styles.displayIcon}>
          <img src={display} alt="display" />
        </span>
        Display
        <span className={styles.dropdownIcon}>
          <img src={down} alt="dropdown icon" />
        </span>
      </button>

      {isDropdownVisible && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownItem}>
            <span>Grouping</span>
            <select value={grouping} onChange={handleGroupingChange}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className={styles.dropdownItem}>
            <span>Ordering</span>
            <select value={ordering} onChange={handleOrderingChange}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
