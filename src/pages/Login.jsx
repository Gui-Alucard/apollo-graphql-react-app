import React, { useState, useEffect, useContext } from 'react';
import propTypes from 'prop-types';
import SpaceContext from '../context/SpaceContext';

function Login({ history }) {
  const { email, setEmail } = useContext(SpaceContext);
  const [enable, setEnable] = useState(false);
  const [pass, setPass] = useState('');

  function handleClickLogin() {
    localStorage.setItem('user', JSON.stringify({ email }));
    history.push('/home');
    setEnable(false);
  }

  useEffect(() => {
    const seven = /.{7,}/;
    const reg = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    setEnable(reg.test(email) && seven.test(pass));
  }, [email, pass]);

  return (
    <section className="login-container">
      <div className="login-image" />
      <section className="login-input-btn">
        <section className="login-inputs">
          <input
            className="login-email"
            data-testid="email-input"
            type="email"
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <input
            className="login-pass"
            data-testid="password-input"
            type="password"
            placeholder="Password"
            onChange={ ({ target }) => setPass(target.value) }
          />
          <section className="login-button-container">
            <button
              onClick={ () => { handleClickLogin(); } }
              data-testid="login-submit-btn"
              type="button"
              className="login-button"
              disabled={ !enable }
            >
              Entrar
            </button>
          </section>
        </section>
      </section>
    </section>
  );
}

Login.defaultProps = {
  history: '/',
};

Login.propTypes = {
  history: propTypes.shape(),
};

export default Login;

