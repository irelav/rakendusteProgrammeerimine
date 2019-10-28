const userSchema = new mongoose.Schema({
    email: {type: String, required:true, unique: true },
    hash: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
    shoppingCart: { type: String, required: true}
});