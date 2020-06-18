const express = require("express");
const path = require("path");

const app = express();
app.listen(process.env.PORT || 8080);

// Serve only the static files form the dist directory
app.use(express.static("./dist/ShopUI/"));

app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
});

// Start the app by listening on the default Heroku port
