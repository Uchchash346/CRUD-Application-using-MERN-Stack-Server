const mongoose = require('mongoose');

const DB = "mongodb+srv://uchchash:ZRhxnZ76B4nR7iU6@cluster0.4sdse.mongodb.net/mernstack?retryWrites=true&w=majority"
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connection Start")).catch((error) => console.error(error.message))