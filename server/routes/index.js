var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

/* GET home pages. */
router.get('/', function(req, res, next) {
  console.log(req.session);
  if(!req.session.user){                     //到达/home路径首先判断是否已经登录
    req.session.error = "请先登录"
    window.location.href="./admin/login";                //未登录则重定向到 /login 路径
  }
  res.render("home",{title:'Home'});         //已登录则渲染home页面

  // res.render('index', { title: 'Express' });
});
router.post('/', urlencodedParser, function(req, res, next) {
  console.log(req.session);
  res.send("hello");
});

module.exports = router;
