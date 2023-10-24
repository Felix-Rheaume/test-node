const express = require('express');

// création d'une application exprexx
const app = express();

// use recoit une fonction en parametre et elle sera appellé pour tous les requetes.
app.use((req, res) => {

    // permet de retourner la réponse en format JSON
    res.json({ message: 'Lawrence c\'est le plus beau et le meilleur programmeur après Martin Simoneau' }); 
 });

module.exports = app;