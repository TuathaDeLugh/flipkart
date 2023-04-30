import mongoose from 'mongoose';

const Connection = async (user, pwd) => {
    const URL = `mongodb+srv://admin:1234@crud-app.dqbojvl.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log("Database Connected Successfully!");
    }
    catch(err) {
        console.log("Error while connecting with the database", err.message);
    }
};
// Yo
export default Connection;