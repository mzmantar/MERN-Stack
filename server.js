const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/',(req, res) => {
   res.status(200).send('<h1>Server is running</h1>');
});

app.get('/api', (req, res) => { res.status(200).json({ message: 'API is working' }); });

const fournisseurs = [
  { id: 1, nom: "Fournisseur A", valeur: 30 },
  { id: 2, nom: "Fournisseur B", valeur: 60 },
  { id: 3, nom: "Fournisseur C", valeur: 45 }
];

app.get('/api/fournisseurs', (req, res) => {
  const maxValeur = parseInt(req.query.valeur) || 50; 
  const filtres = fournisseurs.filter(f => f.valeur < maxValeur);
  res.json(filtres);
});

app.post('/api/articles', (req, res) => {
    const articlesData = req.body;
    console.log(articlesData); 
    res.status(201).json({ message: 'Articles received', article:{id:Date.now() , ...articlesData} });
});
app.get('/api/test', (req, res) => {
  res.status(200).json({ message: 'Test route is working' });
});

app.get('/about', (req, res) => {
  res.status(200).send('<h2>À propos : Ceci est une API Express de démonstration.</h2>');
});

const users = [
  { id: 1, name: 'Alice', email: 'alice@email.com' },
  { id: 2, name: 'Bob', email: 'bob@email.com' },
  { id: 3, name: 'Charlie', email: 'charlie@email.com' }
];
app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.post('/contact', (req, res) => {
  const { email, message } = req.body;
  if (!email || !message) {
    return res.status(400).json({ error: 'Email et message requis.' });
  }
  res.status(200).json({ message: `Message reçu de ${email} !` });
});
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});




