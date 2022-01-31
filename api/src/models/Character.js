const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('character', {
    id: {
      //por defecto me va a crear uno sequelize... pero pueden pisarse los id
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    birthday: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM('Alive', 'Deceased', 'Presumed dead', 'Unknown'),
      allowNull: true
    },
    img: {
      type: DataTypes.STRING,
      allowNull: true
    },
    createdInDb: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
    }
  });
};
