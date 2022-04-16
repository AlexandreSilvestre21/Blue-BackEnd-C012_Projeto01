const personagens = [
    {
      id: 1,
      nome: 'Batman',
      idade: 54,
      origem: 'Gothan City',
    },
    {
      id: 2,
      nome: 'Hulk',
      idade: 46,
      origem: 'New York',
    },
    {
      id: 3,
      nome: 'Superman',
      idade: 84,
      origem: 'Krypton',
    },
  ];
  
  const findPersonagensService = () => {
    return personagens;
  };
  
  const findPersonagemByIdService = (id) => {
    return personagens.find((personagem) => personagem.id == id);
  };
  
  const createPersonagemService = (newPersonagem) => {
    const newId = personagens.length + 1;
    newPersonagem.id = newId;
    personagens.push(newPersonagem);
    return newPersonagem;
  };

  const updatePersonagemService = (id, personagemEdited) => {
    personagemEdited['id'] = id;
    const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
    personagens[personagemIndex] = personagemEdited;
    return personagemEdited;
  };

  const deletePersonagemService = (id) => {
    const personagemIndex = personagens.findIndex((personagem) => personagem.id == id);
    return personagens.splice(personagemIndex, 1);
  };

  module.exports = {
    findPersonagensService,
    findPersonagemByIdService,
    createPersonagemService,
    updatePersonagemService,
    deletePersonagemService,
  };
