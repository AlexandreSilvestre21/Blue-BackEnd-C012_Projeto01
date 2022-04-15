const express = require('express');

/* NOVO TRECHO */
const cors = require('cors');
/* NOVO TRECHO */

const port = 3000;
const app = express();

/* NOVO TRECHO */
app.use(cors());
/* NOVO TRECHO */

app.use(express.json());


const personagens = [
    {
      id: 1,
      nome: 'Batman',
      idade: 58,
      origem: 'Gothan City',      
    },
    {
      id: 2,
      nome: 'Hulk',
      idade: 52,
      origem: 'New York',
    },
    {
      id: 3,
      nome: 'Superman',
      idade: 61,
      origem: 'Krypton',
    },
  ];
 

 
app.get('/personagens/find-personagens', (req, res) => {
    res.send(personagens);
  });
  

app.get('/personagens/find-personagem/:id', (req, res) => {
    const idParam = req.params.id;
    const chosenPersonagem = personagens.find((personagem) => personagem.id == idParam);
    res.send(chosenPersonagem);
  });
    

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});


