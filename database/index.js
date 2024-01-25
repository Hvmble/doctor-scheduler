const { connectDB } = require("./config/database.js")
const dbconnection = async () => {
    try {
        const connection = await connectDB()
        connection.on("error", console.error.bind(console, "connection error:"));
        connection.on("open", console.log.bind(console, "Succesful connection:"));
    }
    catch {
        console.log("Error connecting to database")
    }
}
dbconnection()


module.exports = { dbconnection }