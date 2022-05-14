const express = require('express');
const router = express.Router();
const {userRegistrationRepository,updateUser,createUser} = require("../infrastructure/repository/user-repository/user-registration-repository");


router.get('/user', async (req,res)=>{
    const users = await userRegistrationRepository();
    return res.status(200).json(users).send();
});

router.post('/user',async (req,res)=>{
    const createdUser = await createUser(req,res);
    return res.status(201).json(createdUser).send();
});

router.put('/user/:id',async (req,res)=>{
    const updatedUser = await updateUser(req,res);
    return res.status(200).json({mensage:"Usuario atualizado"}).send();
});

module.exports = router;