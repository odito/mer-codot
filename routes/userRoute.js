const router = require('express').Router();
const userCtrl = require('../controlers/userCtrl');

router.get('/user',userCtrl.getUsers);
router.post('/user', userCtrl.postUsers);
router.get('/user/:id', userCtrl.editUser);
router.delete('/user/:id', userCtrl.deleteUsers);
router.put('/user/:id', userCtrl.updateUsers);





module.exports=router;
