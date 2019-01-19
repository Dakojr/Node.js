/* EVENT LISTENER EXPLCIATION */

// const EventEmitter = require('events');
//
// let monEcouteur = new EventEmitter();
//
// monEcouteur.on('saute', function (a,b)
// {
//   console.log("j'ai sauter", a ,b);
// });
//
// monEcouteur.emit('saute', 10, 20);


/* EVENT LISTENER WITH SERVER PORT */

let express = require('express');

let app = express();

app.get('/', (request, response) =>
{
  response.send("Hello World");
})

app.get('/demo', (request, response) =>
{
  response.send("Tu est sur la demo");
})

app.listen(8080);

// let app = require('./app').start(8080); //crée une varible de la fonction app.start en parametre le port 8080
//
// let demo = require('./hello') // dans le dossier courrant charge le fichier hello
//
// demo.hello();
//
// demo.aurevoir();
//
//
// app.on('root', function(response)
// {
//   console.log();
//   response.write('Je suis a la racine');
// });

/* BEGIN WITH NODE JS CREATE A SERVER */



// let server = http.createServer() //crée un serveur
//
// server.on('request', function (request, response) //Quand il y a une requete serveur
// {
//   response.writeHead(200);
//
//   let query = url.parse(request.url, true).query; //parse ce qui a était mis dans l'url (?name=marc) || true parse aussi ce qui est passer en parametres et en fait un objet || .query = on recupere la propiété query
//
//   let name = query.name === undefined ? 'anonyme' : query.name;
//
//           //
//           //
//           // if (query.name === undefined)
//           // {
//           //   response.end("Bonjour l'anonyme");
//           // }
//           // else
//           // {
//           //   response.end('Bonjour' + query.name);
//           // }
//           //
//
//   fs.readFile('index.html', 'utf-8', function (err, data) //utf-8 sers a ce que data devienne une chaine de caractères et non un buffer
//   {
//     if(err) // si il y a une erreur
//     {
//       response.writeHead(404); // retourne une entee de type 404
//
//       response.end("Le fichier n'existe pas"); // etaffiche ce message
//     }
//
//     else
//     {
//       response.writeHead(200,
//       {
//         'Content-type': 'text/html; cherset=utf-8' // Encodage utilisé sera de l'utf-8
//       }); //tout c'est bien passer correctement
//
//       data = data.replace('{{ name }}', name); // replace le champ {{name}} dans index.html par la variable name
//
//       response.end(data); //On lit le fichier index.html qui est data
//     }
//
//   });
//
// });
//
// server.listen('8080'); //les requete seront relier au port 8080
