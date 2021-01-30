import React from 'react';
import successImg from '../images/sign-up-success.svg';
import failureImg from '../images/sign-up-failure.svg';

function InfoTooltip ({registerSuccess, isOpen, onClose}){
  
  const popupOpened = isOpen ? 'popup_opened' : '';

  const popupImage = registerSuccess ? successImg : failureImg;

  return (
  <div className={`popup ${popupOpened}`} >
    <div className="popup__container">
      <div className="popup__header">
         
          <button className="popup__close-button" onClick={onClose} ></button>
      </div>
      <img className='popup__image-status' src={popupImage} alt='test'/>
      <h2 className="popup__title_sign-status">
        {registerSuccess ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}
      </h2>
    </div>
  </div>
  );
}


export default InfoTooltip;