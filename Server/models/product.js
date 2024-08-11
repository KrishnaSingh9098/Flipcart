let mongoose=    require('mongoose')

const productSchema = new mongoose.Schema({
    productName: { type: String},
    productDescription: { type: String },
    price: { type: String },

    image: String
}, { timestamps: true });

const Product = mongoose.model('Product',productSchema);
module.exports = Product;


// brand: { type: String},
//     countInStock: { type: Number,  default: 0 },
//     rating: { type: Number, default: 0 },
//     numReviews: { type: Number, default: 0 },