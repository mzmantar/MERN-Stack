# API Blog - Express Server

## Installation

1. Installez les dépendances :
   ```
   npm install
   ```

2. Lancez le serveur :
   ```
   node server.js
   ```

## Routes disponibles

- **GET /**  
  Affiche "Server is running".

- **GET /api/test**  
  Retourne `{ "message": "Test route is working" }`.

- **POST /api/articles**  
  Crée un nouvel article.  
  Exemple de body JSON :
  ```json
  {
    "title": "Mon premier article",
    "content": "Ceci est le contenu de mon article.",
    "author": "John Doe"
  }
  ```

- **GET /about**  
  Affiche une page "À propos".

- **GET /api/users**  
  Retourne un tableau JSON d'utilisateurs factices.

- **POST /contact**  
  Envoie un message de contact.  
  Exemple de body JSON :
  ```json
  {
    "email": "exemple@email.com",
    "message": "Bonjour, ceci est un message."
  }
  ```
  Réponse de succès :
  ```json
  {
    "message": "Message reçu de exemple@email.com !"
  }
  ```

## Test avec Postman

1. Ouvrez Postman et votre collection "API Blog".
2. Testez les routes GET et POST comme indiqué ci-dessus.
3. Sauvegardez vos requêtes dans la collection.
