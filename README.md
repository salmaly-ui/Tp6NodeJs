# 📦 CRUD Express MongoDB

## 🚀 Application Web CRUD (Node.js + Express + MongoDB + EJS)

Application web permettant de gérer des produits (Créer, Lire, Modifier, Supprimer).

---

## 🧰 Stack technique

- Node.js
- Express.js
- MongoDB (Mongoose)
- EJS (Template engine)
- Bootstrap 5
- express-session

---
🎥 Démonstration

🔗 Vidéo :


https://github.com/user-attachments/assets/c10b01cf-3f16-43cb-85f5-15f80e68ae78


---
## 📁 Structure du projet
```
crud-express-mongodb/
│
├── controllers/
│   └── productController.js
├── models/
│   └── product.js
├── routes/
│   └── productRoutes.js
├── services/
│   └── productService.js
├── views/
│   ├── layout.ejs
│   ├── error.ejs
│   └── products/
│       ├── index.ejs
│       ├── create.ejs
│       ├── edit.ejs
│       └── details.ejs
├── public/
├── db/
│   └── mongoose.js
├── .env
├── app.js
└── package.json
```
---

## ⚙️ Prérequis

- Node.js installé
- MongoDB installé (ou Docker)
- MongoDB Compass (optionnel)

---

## 📥 Installation

### 1. Installer les dépendances

```bash
npm install
```

### 2. Configurer le fichier `.env`

Créer un fichier `.env` :

```env
MONGO_URI=mongodb://127.0.0.1:27017/crud_db
PORT=3000
SESSION_SECRET=secret
```

---

## ▶️ Lancer le projet

```bash
node app.js
```

Ouvrir dans le navigateur :

http://localhost:3000/products

---

## 🗄️ Base de données

- Nom : crud_db
- Collection : products (créée automatiquement)

---

## 🌐 Fonctionnalités

✔ Ajouter un produit  
✔ Afficher les produits  
✔ Modifier un produit  
✔ Supprimer un produit  
✔ Voir détails  
✔ Recherche  
✔ Filtres  
✔ Pagination  

---

## 🔄 Routes

GET      /products  
GET      /products/create  
POST     /products/create  
GET      /products/:id  
GET      /products/edit/:id  
POST     /products/:id/update  
POST     /products/:id/delete  

---



## 🎨 Interface

- Bootstrap 5
- Cartes produits
- Formulaire dynamique
- Messages d’erreur

---

## 🚀 Améliorations possibles

- Upload image (Multer)
- Authentification
- API REST
- Dashboard admin
- Dark mode

---

## 📦 Dépendances

express  
mongoose  
dotenv  
ejs  
express-ejs-layouts  
express-session  
body-parser  

---

## 👨‍💻 Auteur
Salma Laouy
Projet CRUD Node.js + MongoDB  
ENS - Informatique
