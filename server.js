const express = require("express");
const exphbs  = require("express-handlebars");
 
const app = express();

const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.get("/",  (req, res) => {
    db.Pet
        .findAll({})
        .then(dbPets => {
            res.render("home", {pets: dbPets});
        });
});

app.get("/contact", (req, res) => {
    res.render("contact");
})

// GET all pets
app.get("/api/pets", (req, res) => {
    db.Pet
        .findAll({})
        .then(dbPets => res.json(dbPets));
});

// POST a pet 
app.post("/api/pet", (req, res) => {
    db.Pet
        .create({
            name: req.body.name,
            age: req.body.age
        }).then(dbPet => {
            res.json(dbPet);
        });
});

// UPDATE a pet
app.put("/api/pet/:id", (req, res) => {
    db.Pet
        .update({
            adopted: req.body.adopted
        }, {
            where: {
                id: req.params.id
            }
        }).then(dbPet => res.json(dbPet))
});
 
db.sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`App is on http://localhost:${PORT}`));
});
