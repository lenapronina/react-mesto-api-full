import React, { useState } from 'react';

function Login({ onLogin }){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // clean up form inputs
  const resetForm = () => {
    setEmail('');
    setPassword('');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
    resetForm();
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }
  
  const handlePasswordChange = (e) => {
   setPassword(e.target.value);
  }

  return (
    <div className="authorization">
      <h2 className="authorization__heading">Вход</h2>
      <form  
        className="authorization__form"
        onSubmit={handleSubmit}
      >
        <div className="authorization__field">
          <input 
            className="authorization__input"
            name="username"
            type="email" 
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div> 
        <div className="authorization__field">
          <input 
            className="authorization__input"
            name="password" 
            type="password" 
            placeholder="Пароль"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>  
        <button className="authorization__button" type="submit">Войти</button>
      </form>
    </div>
  );
}

export default Login;