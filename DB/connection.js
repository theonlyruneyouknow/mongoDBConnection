const mongoose = require('mongoose');

const URI = "mongodb+srv://dbUser:dbPass@cluster0.f1qjk0y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    await mongoose.connect(URI);
    console.log('Connected to DB');

}

module.exports = connectDB