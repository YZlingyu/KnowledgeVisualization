var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

require('./../util/util');


var mongoose = require('mongoose');
var User = require('./../models/user');
//连接MongoDB数据库
mongoose.connect('mongodb://127.0.0.1:27017/knowledge',{useMongoClient:true});

mongoose.connection.on("connected", function () {
  console.log("MongoDB connected success.")
});

mongoose.connection.on("error", function () {
  console.log("MongoDB connected fail.")
});

mongoose.connection.on("disconnected", function () {
  console.log("MongoDB connected disconnected.")
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/*router.post("/login", function (req,res,next) {
  var param = {
    userName:req.body.userName,
    userPwd:req.body.userPwd
  }
  User.findOne(param, function (err,doc) {
    if(err){
      res.json({
        status:"1",
        msg:err.message
      });
    }else{
      if(doc){
        res.cookie("userId",doc.userId,{
          path:'/',
          maxAge:1000*60*60
        });
        res.cookie("userName",doc.userName,{
          path:'/',
          maxAge:1000*60*60
        });
        //req.session.user = doc;
        res.json({
          status:'0',
          msg:'',
          result:{
            userName:doc.userName
          }
        });
      }
    }
  });
});*/

router.post("/login",urlencodedParser, function(req, res, next){
  console.log(req.query);
  User.findOne({userName:req.query.userName}, function(err, doc){
    if(err){
      res.send(500);
      console.log(err);
      res.json({
        status: "1",
        msg: err.message
      });
    }else if(!doc){
      req.session.error = '用户名不存在';
      res.send(404);
    }else{
      if(req.query.userPwd != doc.userPwd){
        req.session.error = "密码错误";
        res.send(404);
        }else{

        req.session.user = doc;
        console.log(req.session);
        res.send(200);
      }
    }
  });
});

router.get("/login", function(req, res){
  console.log(res);
})

router.post("/register", urlencodedParser, function(req, res, next) {
  var userId=0;
  var param = {
    userName: req.query.userName,
    userPwd: req.query.userPwd
  }

  User.findOne(param, function(err, doc){
    if(err){
      res.send(500);
      req.session.error =  '网络异常错误！';
      console.log(err);
    }else if(doc){
      console.log(doc);
      req.session.error = '用户名已存在！';
      res.send(500);
    }else{
      User.create({
        userId: userId++,
        userName: param.userName,
        userPwd: param.userPwd
      },function(err, doc){
        if(err){
          res.send(500);
          console.log(err);
        }else{
          res.send(200);
          console.log("success");
          req.session.error = '用户名创建成功！';
        }
      })
    }
  });
})

router.post("/register",urlencodedParser, function(req, res){
  console.log(req);
})

router.get("/logout", function(req, res){
  req.session.user = null;
  req.session.error = null;
});

router.get("/checklogin", function(req, res){
  console.log(req.session);
  if(req.session.user==undefined){
    res.json({log:0})
  }else{
    res.json({log:1})
  }
  /*var session = req.session;
  res.json({
    session: session
  })*/
  /*if(!req.session.user){                     //到达/home路径首先判断是否已经登录
    //req.session.error = "请先登录";
   // res.send(500);
    res.json({
      status: "1",
      msg: err.message
    });
  }else{
    req.session.error = "已登录";
  }*/
})

module.exports = router;
