const {Pool} = require("pg")

const pool= new Pool({
    user:"postgres",
    password: "7811Dcb",
    host: "localhost",
    port: 5432,
    database : "login_system"
})


module.exports = pool;