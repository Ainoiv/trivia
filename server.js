const express = require("express")
const app = express();
const path = require("path");

const bodyParser = require("body-parser");
const session = require("express-session");

const PORT = 8000;

app.use(express.static(path.join(__dirname, "./client/dist")));
app.use(bodyParser.json());

app.use(session({
    secret: "really really secret",
    resave: false,
    saveUninitialized: true
}));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})