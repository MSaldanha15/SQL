const express = require('express');
const bodyParser = require('body-parser');
const res = require('express/lib/response');
const router = require('./interface/user-interface');
const app = express();
const USER_REGISTRATION_MODEL=require('./infrastructure/database/model/user-model/user-registration-model').USER_REGISTRATION_MODEL;
const dotenv = require("dotenv");

dotenv.config();

app.use(express.json());
app.use(router);
app.use(bodyParser.urlencoded({ extended:false}));
USER_REGISTRATION_MODEL.sync();

app.listen(process.env.PORTA, () => console.log('Ouvindo a Porta',process.env.PORTA));




