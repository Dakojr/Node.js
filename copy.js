/* on utilise cette méthode dans cette exemple car :
    - si le fichier est trop grand la variable (chunk) va avoir la taille total du fichier a copier
    - avec cette méthode chunk crée un flux a lire partie par partie et en utilisant pipe l'écriture se fais en meme temps que la lecture*/

let fs = require('fs');

let file = 'drake.mp4';

fs.stat(file, (err, stat) =>
{
  let totalsize = stat.size; //taille total

  let progress = 0;

  let read = fs.createReadStream(file); //crée un flux de lecture du fichier file

  let write = fs.createWriteStream('copy.mp4'); //écrit un nouveau fichier copy.mp4

  read.on('data', (chunk) => //chunk est un morceau du fichier lu (soit un buffer soit une String)
  {
    console.log(chunk.length);

    progress += chunk.length; //incrément la progression du lecture du fichier

    console.log("J'ai lu " + Math.round(100* progress / totalsize) + "%");
  });

  read.pipe(write); //pipe permets de mettre en pose la lecture du fichier quand l'écriture du fichier est plus lente que la lecture ('drain')

  write.on('finish', () =>
  {
    console.log("le fichier à bien été copier")
  })
});
