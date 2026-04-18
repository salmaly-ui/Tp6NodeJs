const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Le nom du produit est obligatoire'],
    trim: true,
    minlength: [2, 'Le nom doit contenir au moins 2 caractères']
  },
  price: {
    type: Number,
    required: [true, 'Le prix est obligatoire'],
    min: [0, 'Le prix ne peut pas être négatif'],
    default: 0
  },
  description: {
    type: String,
    trim: true,
    maxlength: 1000
  },
  category: {
    type: String,
    enum: ['Électronique', 'Vêtements', 'Alimentation', 'Livres', 'Autres'],
    default: 'Autres'
  },
  inStock: {
    type: Boolean,
    default: true
  },
  quantity: {
    type: Number,
    min: 0,
    default: 0
  },
  tags: [String],
  imageUrl: {
    type: String,
    default: 'default-product.jpg'
  }
}, {
  timestamps: true
});

// ✔️ FIX IMPORTANT ICI
productSchema.pre('save', function() {
  if (this.quantity === 0) {
    this.inStock = false;
  }
  
});

productSchema.post('save', function(doc) {
  console.log('Produit sauvegardé:', doc.name);
});

module.exports = mongoose.model('Product', productSchema);