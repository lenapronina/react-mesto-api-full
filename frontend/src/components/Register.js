import { useState } from 'react';

function Register({ onRegister }){

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(email, password);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
    <div className="authorization">
      <h2 className="authorization__heading">Регистрация</h2>
      <form  
        className="authorization__form"
        onSubmit={handleSubmit}
      >
        <div className="authorization__field">
          <input 
            className="authorization__input" 
            id="email" 
            name="email" 
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
            id="password" 
            name="password" 
            type="password" 
            placeholder="Пароль" 
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>  
        <button className="authorization__button" type="submit">Зарегистрироваться</button>
      </form>
      <a className="authorization__signin-link" href="/sign-in">Уже зарегистрированы? Войти</a>
    </div>
  );
}

export default Register;