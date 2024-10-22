const mongoose = require('mongoose');

// chawal schema 
/**
 *  Name:, pricePerkg, stockInkg, unitBag
 * 
*/
const productSchema = new mongoose.Schema({
     productName: {
        type: String,
        required: true
    },
    
    pricePerKg: {
        type: Number,
        required: true
    },

    stockInKg: {
        type: Number,
        required: true,
       
    },
    unitBag: {
        type: Number,
        required: true
    },
    
    
}, { timestamps: true });
const product = mongoose.model('productModel', productSchema);
module.exports = product;


//mongodb+srv://mongo-learning:QiONskrtrJrIcAvc@cluster0.9kl2w.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0