import mongoose from "mongoose"

export const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/', {
            dbName: 'notesDb'
        });
        console.log("bd conectada")
    } catch (error) {
        console.log(error);
    }
}