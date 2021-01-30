import React, { useEffect, useState } from 'react';
import useViewport from '../utils/useViewport';
import headerLogo from '../images/header-logo.svg';
import burgerMenu from '../images/header-burger-menu.svg';
import closeMenuButton from '../images/header-close-button.svg';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Header({ 
  loggedIn,
  handleSignOut,
  pathName})
{
  
  const currentUser = React.useContext(CurrentUserContext);

  const [buttonText, setButtonText] = useState('');
  const [mobileMode, setMobileMode] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  
  const { width } = useViewport();
 
  const setButton = () => {
    if(pathName === '/user-cards' ){
      setButtonText('Выйти');
    } else if(pathName === '/sign-in'){
      setButtonText('Регистрация');
    } else {
      setButtonText('Войти');
    }
  }

  const checkScreenWidth = () => {
    if(width < 600){
      setMobileMode(true);
    } else {
      setMobileMode(false);
    }
  }

  const clickMenu = ()=> {
    if(isMenuOpen){
      setMenuOpen(false);
    } else {
      setMenuOpen(true);
    }
  }
  
  useEffect(()=> {
    checkScreenWidth();
  })

  useEffect(() => {
    setButton();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathName]);

  const menuOpened = isMenuOpen ? 'header__menu-dropup_opened' : '';

  const menuImage = isMenuOpen ? closeMenuButton : burgerMenu;

  return (
    mobileMode && loggedIn 
    ? 
    (<>
    <div className={`header__menu-dropup ${menuOpened}`}>
      <p className="header__auth-email header__auth-email_type_mobile">{currentUser.email}</p>
      <button className="header__auth-sign" onClick={handleSignOut}>{buttonText}</button>
    </div>
    <header className="header header_type_mobile page__header">
      <img className="header__logo" src={headerLogo} alt="Логотип Mesto" />
      <div className="header__auth">
        <button className="header__menu-button"onClick={clickMenu}>
          <img src={menuImage} alt='button'></img>
        </button>
      </div>
    </header>
    </>) 
    : 
    (<header className="header page__header">
      <img className="header__logo" src={headerLogo} alt="Логотип Mesto" />
      <div className="header__auth">
        { loggedIn ? <p className="header__auth-email">{currentUser.email}</p> : ''}
        <button className="header__auth-sign" onClick={handleSignOut}>{buttonText}</button>
      </div>
    </header>)
  )
}

export default Header;
