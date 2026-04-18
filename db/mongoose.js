const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

// Vérification de sécurité (très important)
if (!MONGO_URI) {
  console.error('❌ MONGO_URI est introuvable dans .env');
  process.exit(1);
}

// Connexion à MongoDB
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connexion à MongoDB établie avec succès');
  })
  .catch((err) => {
    console.error('❌ Erreur de connexion MongoDB:', err.message);
    process.exit(1);
  });

// Événements MongoDB
mongoose.connection.on('connected', () => {
  console.log('🟢 Mongoose connecté à MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('🔴 Erreur Mongoose:', err.message);
});

mongoose.connection.on('disconnected', () => {
  console.log('🟡 Mongoose déconnecté de MongoDB');
});

// Fermeture propre
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  console.log('🛑 Connexion MongoDB fermée proprement');
  process.exit(0);
});

module.exports = mongoose;