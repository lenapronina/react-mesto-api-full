class Api {
  constructor({baseUrl, headers}){
    this._baseURL = baseUrl;
  }

  _checkResStatus(res){
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
  }

  getInitialCards(token) {
    return fetch(`${this._baseURL}/cards`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
    .then(res => this._checkResStatus(res));
  }

  // getUserInfo(){
  //   return fetch(`${this._baseURL}/users/me`, {
  //     headers: this._headers
  //   })
  //   .then(res => this._checkResStatus(res));
  // }

  patchUserAvatar(updatedData, token){
    return fetch(`${this._baseURL}/users/me/avatar`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        avatar: updatedData.avatar
      })
    })
    .then(res => this._checkResStatus(res));
  }

  patchUpdatedUserInfo(updatedData, token){
    return fetch(`${this._baseURL}/users/me`, {
      method: 'PATCH',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: updatedData.name,
        about: updatedData.about
      })
    })
    .then(res => this._checkResStatus(res));
  }

  changeLikeCardStatus(cardId, isLiked, token){
    if(isLiked){
      return fetch(`${this._baseURL}/cards/${cardId}/likes`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      .then(res => this._checkResStatus(res));
    } else {
      return fetch(`${this._baseURL}/cards/${cardId}/likes`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
      .then(res => this._checkResStatus(res));
    }
  }

  deleteCard(cardId, token){
    return fetch(`${this._baseURL}/cards/${cardId}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    })
    .then(res => this._checkResStatus(res));
  }

  postNewCard(cardData, token){
    return fetch(`${this._baseURL}/cards`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: cardData.name,
        link: cardData.link
      })
    })
    .then(res => this._checkResStatus(res));
  }
}


const api = new Api({
  baseUrl: 'http://localhost:3000'
});

export default api;
