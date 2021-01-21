module.exports = (sequelize, Sequelize) => {
    const Photo = sequelize.define("photo", {
      label: {type: Sequelize.STRING},
      url: {type: Sequelize.STRING},
     },
   );
  
    return Photo;
  };