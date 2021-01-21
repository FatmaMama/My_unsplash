module.exports = app => {
    const photos = require("../controllers/photo.controller.js");
  
    var router = require("express").Router();
  
    // Create a new photo
    router.post("/", photos.create)

    // Retrieve all photos
    router.get("/", photos.findAll);

    // Retrieve a single photo with id
    router.get("/:id", photos.findOne);

   // Delete a photo with id
    router.delete("/:id", photos.delete);


    app.use('/api/photos', router);
}