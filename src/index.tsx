import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer } from 'miragejs';

createServer({
  routes() {
    //dizendo pro mirage que toda chamada vai estar a partir desse endereço aqui
    //All calls to API start with api
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id:  1,
          title: 'Transaction 1',
          amount: 400,
          type:  'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
