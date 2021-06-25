const express = require('express');
const path = require('path');


//configuration
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", "views");


app.use("/",(req,res,next) => {
    res.render("index");
})


app.listen(PORT,() => {
    console.log(`listening on PORT ${PORT}`);
})