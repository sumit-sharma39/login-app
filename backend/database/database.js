const { Client } = require('pg');


const con= new Client({
    host: "localhost", 
    user: "postgres",
    port: 5432, 
    password: "qwerty123", 
    database: "login"
})

con.connect( () => {
    console.log("connected to the database.")
})

module.exports = con;