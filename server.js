const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.use(express.static("public"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect("mongodb://localhost:27017/roomDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(() => {
    console.log(`connection to database established`)
}).catch(err => {
    console.log(`db error ${err.message}`);
    process.exit(-1)
})

const roomSchema = new mongoose.Schema({
    email: String,
    name: String,
    rooms: String,
    guest: String,
    arrival: String,
    departure: String
});

const complainSchema = new mongoose.Schema({
    name: String,
    email: String,
    complain: String
});

const Roomdetails = new mongoose.model("Roomdetails", roomSchema);
const Complaindetails = new mongoose.model("Complaindetails", complainSchema);

app.get("/", function(req, res) {
    res.render('HotelWebpage');
});

app.get("/index1", function(req, res) {
    res.render('index1');
});

app.get("/index", function(req, res) {
    res.render("index");
});

app.get("/explore", function(req, res) {
    res.render('explore');
});

app.get("/contact", function(req, res) {
    res.render('contact');
});

app.post("/index", function(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const rooms = req.body.number1;
    const guest = req.body.number2;
    const y = req.body.arrival;
    const x = req.body.departure;
    console.log(x, y);
    console.log(email);



    const newRoom = new Roomdetails({
        email: email,
        name: name,
        rooms: rooms,
        guest: guest,
        arrival: x,
        departure: y
    });

    newRoom.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });

});


app.post("/contact", function(req, res) {
    const email = req.body.email;
    const name = req.body.name;
    const complain = req.body.complain;


    const newComplain = new Complaindetails({
        email: email,
        name: name,
        complain: complain
    });

    newComplain.save(function(err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/");
        }
    });

});


app.listen(3000, function() {
    console.log("Server is running on 3000");
});