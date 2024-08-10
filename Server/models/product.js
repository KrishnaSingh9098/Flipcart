let mongoose=    require('mongoose')

const productSchema = new mongoose.Schema({
    name: { type: String},
    description: { type: String },
    price: { type: Number },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
    brand: { type: String},
    countInStock: { type: Number,  default: 0 },
    rating: { type: Number, default: 0 },
    numReviews: { type: Number, default: 0 },
    images: [String]
}, { timestamps: true });

const Product = mongoose.model('Product',productSchema);
module.exports = Product;