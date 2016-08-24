var express = require('express');
var router = express.Router();





var welcome = require ('../controllers/welcome');
router.get('/login',welcome.show);
router.post('/index',welcome.index);
router.get('/regist',welcome.regist);
router.post('/doRegist',welcome.doRegist);
router.get('/',welcome.indexY);
router.get('/view',welcome.view);






module.exports = router;



//taiozhuan chongdingxiang
