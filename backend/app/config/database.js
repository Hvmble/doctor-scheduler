const mongoose = require("mongoose")


const { DBHOST, DBPORT, DBNAME } = process.env

const connectDB = async () => {
    try {
        const { connection } = await mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)
        console.log(`MongoDB connected with ${DBPORT}`)
        return connection;
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

const dbConnection = async () => {
    try {
        const connection = await connectDB()
        connection.on("error", console.error.bind(console, "connection error:"));
        connection.on("open", console.log.bind(console, "Succesful connection:"));
    }
    catch {
        console.log("Error connecting to database")
    }
}
dbConnection()
module.exports = { dbConnection }
