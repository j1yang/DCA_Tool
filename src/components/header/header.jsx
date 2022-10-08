import React from 'react';
import styles from './header.module.css';

const Header = ({onLogout}) => {
  return(
    <section className={styles.header}>
      <h1 className={styles.title}>
      💰 Dollar-Cost Averaging Status 🤑
      </h1>
      {onLogout && (<button className={styles.logout} onClick={onLogout}>
        <i class="fa-solid fa-right-from-bracket"></i>
      </button>)
      }
    </section>
  );
};

export default Header;