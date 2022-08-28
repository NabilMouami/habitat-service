const express = require("express");
const app = express();
const mysql = require("mysql");

const bodyParser = require("body-parser");
const path = require("path")
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname + "/public")))
app.use(cors("*"))
const port = process.env.PORT || 5000;



const db = mysql.createConnection({
  user: "root",
  host: "127.0.0.1",
  password: "123456789",
  database: "habitat",
  insecureAuth: true,
});

app.post("/reclamez", (req, res) => {

  console.log(req.body)
  db.query(
    "INSERT INTO reclamation (Nom,reclchoix) VALUES (?,?)",
    [req.body.name,['probleme-prix','quantite','qualite','casse','livraison']],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("success!!")
      }
    }
  );
});



app.listen(port, () => {
  console.log("server is running ...");
});
