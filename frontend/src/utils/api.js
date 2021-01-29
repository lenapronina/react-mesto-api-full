class Api {
  constructor({baseUrl, headers}){
    this._baseURL = baseUrl;
    this._headers = headers;
  }

  _checkResStatus(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialCards(token) {
    return fetch(`${this._baseURL}/cards`, {
      headers: this._headers
    })
    .then(res => this._checkResStatus(res));
  }

  getUserInfo(token){
    return fetch(`${this._baseURL}/users/me`, {
      headers: this._headers
    })
    .then(res => this._checkResStatus(res));
  }

  getAllInitialData(){
    return Promise.all([this.getInitialCards(), this.getUserInfo()])
  }

  patchUserAvatar(updatedData){
    return fetch(`${this._baseURL}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: updatedData.avatar
      })
    })
    .then(res => this._checkResStatus(res));
  }

  patchUpdatedUserInfo(updatedData){
    return fetch(`${this._baseURL}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: updatedData.name,
        about: updatedData.about
      })
    })
    .then(res => this._checkResStatus(res));
  }

  changeLikeCardStatus(cardId, isLiked){
    if(isLiked){
      return fetch(`${this._baseURL}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: this._headers
      })
      .then(res => this._checkResStatus(res));
    } else {
      return fetch(`${this._baseURL}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: this._headers
      })
      .then(res => this._checkResStatus(res));
    }
  }

  deleteCard(cardId){
    return fetch(`${this._baseURL}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._checkResStatus(res));
  }

  postNewCard(cardData){
    return fetch(`${this._baseURL}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
    .then(res => this._checkResStatus(res));
  }
}


const api = new Api({
  baseUrl: 'http://localhost:3000',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
  }
});

export default api;
