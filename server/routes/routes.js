var express = require("express")
var app = express();
var router = express.Router();
var HomeController = require("../controllers/HomeController");
var UserController = require("../controllers/UserController");
const AdminAuth =require("../middlewares/AdminAuth")

//Você precisa token para acessar alguma rotas, faça login.

router.get('/', HomeController.index);
router.post('/user', UserController.create);
router.get('/user',AdminAuth, UserController.index);
router.get('/user/:id',AdminAuth, UserController.findUser);
router.put('/user',AdminAuth, UserController.edit);
router.delete('/user/:id',AdminAuth, UserController.delete);
router.post('/recoverpassword', UserController.recoverPassword)
router.patch('/changepassword', UserController.changePassword)
router.post('/login', UserController.login)
router.post('/validate', AdminAuth,HomeController.validate)
router.get('/https://cloudresourcemanager.googleapis.com/v3/projects/478764655261-tsuahl5fepudgd7gdiild2tdn4i10cse.apps.googleusercontent.com')
module.exports = router;