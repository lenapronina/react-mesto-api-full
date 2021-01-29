import React, { useState } from 'react';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import DeleteCardPopup from './DeleteCardPopup';
import AddPlacePopup from './AddPlacePopup';

function UserPage({
  cards,
  isDataLoaded,
  isLoading,
  onEditProfile,
  onEditAvatar,
  onAddPlace,
  onCardClick,
  onCardLike,
  onDeleteButtonClick,
  card,
  selectedCard,
  closeAllPopups,
  closeClickOverlayPopups,
  handleCardDelete,
  handleAddPlaceSubmit,
  isDeleteCardPopupOpen,
  isEditProfilePopupOpen,
  isEditAvatarPopupOpen,
  isAddPlacePopupOpen,
  handleUpdateUser,
  handleUpdateAvatar})
{
 
  // states for collecting all forms values and validation errors
  const [values, setValues] = useState({
    addCard: {},
    editProfile: {},
    editAvatar: {}
  });
  const [errors, setErrors] = useState({
    addCard: {},
    editProfile: {},
    editAvatar: {}
  });

  function handleChange(event){
    setValues({ ...values,  [event.target.form.id]: { ...values[event.target.form.id],
      [event.target.name]: event.target.value,
    }

    });
    setErrors({...errors, [event.target.form.id]:{
      ...errors[event.target.form.id],
      [event.target.name]: event.target.validationMessage}
    });
  };
 
 return(
  <>
    <Main
      onEditProfile={onEditProfile}
      onEditAvatar={onEditAvatar}
      onAddPlace={onAddPlace}
      onCardClick={onCardClick}
      cards={cards}
      onCardLike={onCardLike}
      onDeleteButtonClick={onDeleteButtonClick}
      isLoading={isLoading}
      isDataLoaded={isDataLoaded}
    />
    <Footer />
    <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}
      onOverlayClick={closeClickOverlayPopups}
    />
    <DeleteCardPopup
      card={card}
      isOpen={isDeleteCardPopupOpen}
      onClose={closeAllPopups}
      onOverlayClick={closeClickOverlayPopups}
      onCardDelete={handleCardDelete}
      isLoading={isLoading}
    />
    <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
      onOverlayClick={closeClickOverlayPopups}
      onUpdateUser={handleUpdateUser}
      values={values}
      errors={errors}
      setValues={setValues}
      setErrors={setErrors}
      handleChange={handleChange}
      isLoading={isLoading}
    />
    <EditAvatarPopup
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
      onOverlayClick={closeClickOverlayPopups}
      onUpdateAvatar={handleUpdateAvatar}
      values={values}
      errors={errors}
      setValues={setValues}
      setErrors={setErrors}
      handleChange={handleChange}
      isLoading={isLoading}
    />
    <AddPlacePopup
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
      onAddPlace={handleAddPlaceSubmit}
      onOverlayClick={closeClickOverlayPopups}
      values={values}
      errors={errors}
      setValues={setValues}
      setErrors={setErrors}
      handleChange={handleChange}
      isLoading={isLoading}
    />
  </>
 )
}

export default UserPage;