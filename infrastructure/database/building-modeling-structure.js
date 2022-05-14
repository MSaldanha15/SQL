const Sequelize = require("sequelize");

const sequelize = require('../configuration/connect-database' );

const dataBase = [
    { id: 1, name: "Matheus", birthday: "06-06-1999" },
    { id: 2, name: "João", birthday: "02-05-1982"},
    { id: 3, name: "Pedro", birthday: "15-09-1995" },
    { id: 4, name: "Fernando", birthday: "10-11-1990" },
    { id: 5, name: "José", birthday: "23-12-1998" },
];

dataBase.Sequelize = Sequelize;
dataBase.sequelize = sequelize;

dataBase.cadastro_usuario = require("./model/user-model/user-registration-model" );

module.exports = dataBase;