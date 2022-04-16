const personagensService = require('../services/personagens.service');

const findPersonagensController = (req, res) => {
  const allPersonagens = personagensService.findPersonagensService();
  res.send(allPersonagens);
};

const findPersonagemByIdController = (req, res) => {
  const idParam = req.params.id;
  const chosenPersonagem = personagensService.findPersonagemByIdService(idParam);
  res.send(chosenPersonagem);
};

const createPersonagemController = (req, res) => {
    const personagem = req.body;
    const newPersonagem = personagensService.createPersonagemService(personagem);
    res.send(newPersonagem);
  };
  
const updatePersonagemController = (req, res) => {
    const idParam = +req.params.id;
    const personagemEdit = req.body;
    const updatedPersonagem = personagensService.updatePersonagemService(idParam, personagemEdit);
    res.send(updatedPersonagem);
  };
  
const deletePersonagemController = (req, res) => {
    const idParam = req.params.id;
    personagensService.deletePersonagemService(idParam);
    res.send({ message: 'Personagem deletado com sucesso!' });
  };

module.exports = {
  findPersonagensController,
  findPersonagemByIdController,
  createPersonagemController,
  updatePersonagemController,
  deletePersonagemController
};
