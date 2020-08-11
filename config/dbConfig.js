const mongoose = require('mongoose');

const connectDB = async (dbUrl) => {

    try {
        const dbConnection = await mongoose.connect( dbUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: true
        });

        console.log(`Connected to MongoDB: ${dbConnection.connection.host}`);

    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;