import mongoose, { Schema, model } from 'mongoose';
const productSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId, // Corrected the type
        ref: 'category', // Assuming the category model is named 'Category'
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
  
    price: {
        type: Number,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    shipping: {
        type: Boolean,
    }, 
}, { timestamps: true });

// Export the "Product" model
export default model('Product', productSchema);
