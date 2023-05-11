//import json-server
//import = require
const jsonServer = require('json-server')

//create Server application
const server = jsonServer.create()

//set up the route for db.json (file to be run)
const router = jsonServer.router("db.json")

//return a middleware(Asynchoronous) used by Json Server
const middleware = jsonServer.defaults()

//set up port number for server app
const port = process.env.PORT || 3000

//user router and middleware in server applicaton
//-> important -> first use middleware then use router 
server.use(middleware)
server.use(router);


//to listen the server
server.listen(port,()=>{
    console.log(`Contact sever app started at port ${{port}}`);
})