const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/characters', async (req, res) => {
    const personajeName = req.params.personajeName
    const url = `https://rickandmortyapi.com/api/character`
    try{const response = await axios.get(url)
  res.json(charactersData);}
  catch (ERROR){
    res.status(404).json({error:`Personaje no encontrado`})
}});

app.get('/characters/:name', async (req, res) => {
  const characterName = req.params.name;
  try{
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${characterName}`);
    const character = response.data.results[0];

  if (character) {
    res.json(character);
  } else {
    res.status(404).json({ error: 'Personaje no encontrado' });
  }
}});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});