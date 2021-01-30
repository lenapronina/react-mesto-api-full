import React, { useState, useEffect } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from './Header';
import InfoTooltip from './InfoTooltip';
import UserPage from './UserPage';
import Register from './Register';
import Login from './Login';
import ProtectedRoute from './ProtectedRoute';
import api from '../utils/api';
import * as userAuth from '../utils/userAuth';

import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {

  const [ loggedIn, setLoggedIn ] = useState(false);

  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const history = useHistory();

  const [path, setPath] = useState('/sign-in');

  // set useState for CurrentUserContext

  const [currentUser, setCurrentUser] = useState('');

  
  // states for updating card list
  const [cards, setCards] = useState([]);
  const [isDataLoaded, setDataLoaded] = useState(false);
  // states for updating and styling loading proccess
  const [isLoading, setIsLoading] = useState(false);

  // useStates for manage popups opening
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);

  // states for updating  card by click card for delete and show in image viewer
  const [selectedCard, setSelectedCard]= useState(false);
  const [card, setCard] = useState({});
  
  useEffect(() => {
    if(loggedIn) {
      // run Loader
      setDataLoaded(true);
      //fetch profile and cards data
      api.getInitialCards(localStorage.getItem('jwt'))
      .then((initialCardsList) => {

        setCards(initialCardsList.map((card)=>({
          _id: card._id,
          owner: card.owner,
          name: card.name,
          link: card.link,
          likes: card.likes
        })));
        // stop Loader
        setDataLoaded(false);
      })
      .catch((err)=> console.log(err))
      .finally(()=> setDataLoaded(false));

      
    }  
  }, [loggedIn]);

  const handleCardLike = (card) => {
    // check if card has already have a like
    const isLiked = card.likes.some(i => i === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked, localStorage.getItem('jwt'))
      .then((newCard) => {
        //create new cardList replacing liked/disliked card
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards)
      })
      .catch((err)=> console.log(err));
  }

  const handleCardDelete = (card) => {
    setIsLoading(true);

    api.deleteCard(card._id, localStorage.getItem('jwt'))
      .then(()=>{
        //create new cardList removing card with certain id
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err)=> console.log(err))
      .finally(()=> setIsLoading(false));
  }

  const handleUpdateUser = (e) => {
    setIsLoading(true);

    api.patchUpdatedUserInfo(e, localStorage.getItem('jwt'))
      .then((updatedUserData)=> {
        // update user info avatar with new data
        setCurrentUser(updatedUserData);

        closeAllPopups();
      })
      .catch((err)=> console.log(err))
      .finally(()=> setIsLoading(false));
  }

  const handleUpdateAvatar = (e) => {
    setIsLoading(true);
    api.patchUserAvatar(e, localStorage.getItem('jwt'))
      .then((updatedUserAvatar)=> {
        // update user avatar with new data
        setCurrentUser(updatedUserAvatar);
        closeAllPopups();
      })
      .catch((err)=> console.log(err))
      .finally(()=> setIsLoading(false));
  }

  const handleAddPlaceSubmit = (e) => {
    setIsLoading(true);
    api.postNewCard(e, localStorage.getItem('jwt'))
      .then((newCard)=>{
        // add new card to card list
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err)=> console.log(err))
      .finally(()=> setIsLoading(false));
  }

  const handleCardClick = (e) => {
    setSelectedCard(e);
  }

  //open popups
  const handleEditProfileClick = () =>{
    setEditProfilePopupOpen(true);
  }

  const handleEditAvatarClick = () =>{
    setEditAvatarPopupOpen(true);
  }

  const handleAddPlaceClick = () =>{
    setAddPlacePopupOpen(true);
  }

  const handleDeleteButtonClick = (card) =>{
    setDeleteCardPopupOpen(true);
    setCard(card);
  }

  //close popups
  const closeAllPopups = () =>{
    setEditProfilePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard(false);
  }

  // close popup by clicking on overlay
  const closeClickOverlayPopups = (e) =>{
    if(e.target === e.currentTarget){
      closeAllPopups();
    }
  }
  
  const closeInfoTooltip = () => {
    setInfoTooltipOpen(false);
  }

  const handleOpened = () => {
    setInfoTooltipOpen(true);
  }

  const tokenCheck = () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt){
      userAuth.getContent(jwt)
        .then((res) => {
          if(res){
            setLoggedIn(true);
            setCurrentUser(res);
          }
        })
        .catch((err) => console.log(err)); 
    }   
  }

  const onLogin = (email, password) => {
    userAuth.authorize(email, password)
      .then((data) => {
        //check for a token in response
        if (data.token) {
          setLoggedIn(true);
        }
      })
      .catch(err => console.log(err));
  }

  const onRegister = (email, password) => {
    userAuth.register(email, password)
    .then((res) => {
      if(res.statusCode !== 400){
        handleRegisterSuccess(true);
        history.push('/sign-in');
      } else {
        handleRegisterSuccess(false);
      }
      handleOpened();
    })
    .catch((err)=> {
      handleRegisterSuccess(false);
      handleOpened();
      console.log(err);
    });
  }

  function handleRegisterSuccess(value){
    setRegisterSuccess(value);
  }

  function handleSignOut(){
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/sign-in');
    setPath('/sign-in');
  }

  function handleRegister(){
    history.push('/sign-up');
    setPath('/sign-up');
  }

  function handleLogin(){
    history.push('/sign-in');
    setPath('/sign-in');
  }

  function handleClick(){
    if(history.location.pathname === '/user-cards'){
      handleSignOut();
    } else if(history.location.pathname ==='/sign-in'){
      handleRegister();
    } else {
      handleLogin();
    }
  }

  useEffect(() => {
    tokenCheck();
    if(loggedIn) {
      history.push('/user-cards');
      setPath('/user-cards');
      // renderUser();
    }
  }, [loggedIn, history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App page">
        <Header 
          loggedIn={loggedIn}
          handleSignOut={handleClick}
          pathName={path}
        />
        <Switch>
          <Route path="/sign-up">
            <Register 
              onRegister={onRegister}  
            />
          </Route>
          <Route path="/sign-in">
            <Login onLogin={onLogin} />
          </Route>
          <ProtectedRoute 
            path="/user-cards" 
            component={UserPage}
            loggedIn={loggedIn}
            card={card}
            cards={cards}
            selectedCard={selectedCard}
            isDataLoaded={isDataLoaded}
            isLoading={isLoading}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onDeleteButtonClick={handleDeleteButtonClick}
            onCardLike={handleCardLike}
            handleUpdateUser={handleUpdateUser}
            handleUpdateAvatar={handleUpdateAvatar}
            handleAddPlaceSubmit={handleAddPlaceSubmit}
            handleCardDelete={handleCardDelete}
            closeAllPopups={closeAllPopups}
            closeClickOverlayPopups={closeClickOverlayPopups}
            isDeleteCardPopupOpen={isDeleteCardPopupOpen}
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
          />
          <Route path="/">
            {loggedIn ? <Redirect to="/user-cards" /> : <Redirect to="/sign-in" />}
          </Route>
        </Switch>
        <InfoTooltip 
          registerSuccess={registerSuccess}
          isOpen={isInfoTooltipOpen}
          onClose={closeInfoTooltip}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
