const express = require("express");
const app = express();
const pool = require("./database")
const cors = require('cors');

app.use(cors());
app.use(express.json());


app.post("/adduser", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

pool.query('INSERT INTO accounts (username, password) VALUES (?, ?)',
    [username, password],
    (err,result) => {
        if (err) {
            console.log(err)
        } else {
            res.send("Values inserted")
        }
    }
    );
});

app.listen(4000, () => {
    console.log("succes")
});