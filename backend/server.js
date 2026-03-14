// Main purpose of server.js: Server create karna & Database connect karna

const app = require("./src/app")
const connectToDB = require('./src/config/database')


connectToDB();
app.listen(3000, (req, res) => {
    console.log("Server started successfully");
})