const http = require("http");
const app = require("./Routes/user");

const connectionToDB = require('./Dbconnections/mongodb')

const PORT = 9008;
http.createServer(app).listen(PORT,()=>{
    new connectionToDB();
    console.log(`server is running at ${PORT}`)
})