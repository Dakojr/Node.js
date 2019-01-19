let http = require('http'); //require le Module 'http'
let fs = require('fs');
let url = require('url');
const EventEmitter = require('events');

let App = { //crée l'objet APP
  start: function(port) //crée start et la fonction prend en parametres le port
  {
    let emitter = new EventEmitter(); //crée un nouvel evenement

    let server = http.createServer((request, response) => { // crée un serveur

      response.writeHead(200, { //quand tout ce passe bien
        'Content-type': 'text/html; charset-utf8' //mets le text en encodage utf-8
      });

      if(request.url === '/') //si l'url arrive a un '/'
      {
        emitter.emit('root', response); //c'est qu'on est a la racine du projet
      }

      response.end();

    }).listen(port) //Si le port est accessible on execute le code a l'interieur de la fonction start

    return emitter;
  }
}

module.exports = App;
