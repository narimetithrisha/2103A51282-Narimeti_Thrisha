const express = require("express");
const app = express();
let port = 8000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.urlencoded({ extended: true }));

app.get("/prime", (req, res) => {
    let primes = "2,3,5,7,11";
    res.render("app.ejs", { x: primes });
});

app.get("/fibo", (req, res) => {
    let fibos = "55,89,144,233,377,610,987,1597,2584,4181,6765";
    res.render("app.ejs", { x: fibos });
});

app.get("/even", (req, res) => {
    let evens = "8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56";
    res.render("app.ejs", { x: evens });
});

app.get("/random", (req, res) => {
    let randoms = "2,19,25,7,4,17,27,30,21,14,10,23";
    res.render("app.ejs", { x: randoms });
});
app.get("*", (req, res) => {
    let x=" "
    res.render("app.ejs",{x});
});

app.listen(port, () => {
    console.log("app listening");
});
