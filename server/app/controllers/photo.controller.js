const db = require("../models");
const Photo = db.photos;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.label) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Photo
    const photo = {
      label: req.body.label,
      url: req.body.url,
    };
  
    // Save Photo in the database
    Photo.create(photo)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Photo."
        });
      });
  };

  exports.findAll = (req, res) => {
    const label = req.query.label;
    var condition = label ? { label: { [Op.iLike]: `%${label}%` } } : null;

    Photo.findAll({ where: condition })
      .then(data => {
        dataSorted = data.sort((photoX, photoY) => ( new Date(photoY.createdAt) - new Date(photoX.createdAt)))
        res.send(dataSorted);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving photos."
        });
      });
  };


  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Photo.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Photo with id=" + id
        });
      });
  };


  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Photo.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Photo was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Photo with id=${id}. Maybe Photo was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };


