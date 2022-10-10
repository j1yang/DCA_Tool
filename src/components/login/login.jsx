import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styles from './login.module.css';

const Login = ({authService}) => {
  const navigate = useNavigate();

  const goToMain = userId => {
    console.log(userId)
    
    navigate(
      "/main", 
      { 
        state: {
          userId:userId
        }
      });
  };

  const onLogin = (event) => {
    authService
    .login(event.currentTarget.textContent)
    .then(data => goToMain(data.user.uid));
  };

  useEffect (()=> {
    authService
    .onAuthChange(user => {
      user && goToMain(user.id);
    });
  });

  return (
    <section className={styles.login}>
      <section className={styles.container}>
        <h1 className={styles.title}>Sign In</h1>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
    </section>
  );
}

export default Login;