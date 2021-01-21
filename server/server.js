const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");


const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json({limit: '50mb'}));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));


///////
const db = require("./app/models");
db.sequelize.sync()
.then(() => {
  console.log("Database connected !")
})
.catch((err) => {
  console.log("error while connection to db",err)
})



app.get("/", (req, res) => {
    res.json({ message: "Welcome to My unsplash!" });
  });

  require("./app/routes/photo.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});