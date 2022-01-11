const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();
//setting template engine
app.set("view engine", "ejs");
app.set("views", "views");

//setting receiving body payload
app.use(bodyParser.urlencoded({ extended: false }));

//setting static page
app.use(express.static(path.join(__dirname, "public")));

//setting routing
app.use("/admin", adminRoutes);
app.use(shopRoutes);

//setting undifend page
app.use((req, res, next) => {
   res.status(404).render("404", { pageTitle: "page not found", path: "eror" });
});

app.listen(3000);
