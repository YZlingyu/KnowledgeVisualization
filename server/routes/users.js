var express = require('express');
var router = express.Router();
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

router.get("/login", function(req, res, next){
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
      //req.session.error = '用户不存在';
      res.json({
        status: "1",
        msg: '用户不存在'
      });
      res.send(404);
    }else{
      if(req.query.userPwd != doc.userPwd){
        //req.session.error = "password error";
        res.json({
          status: "1",
          msg: '密码错误'
        });
        res.send(404);
      }else{
        res.json({
          status: "0",
          msg: 'success'
        });
        //req.session.user = doc;
        res.send(200);
      }
    }
  });
});

router.get("/checkLogin", function (req,res,next) {
  if(req.cookies.userId){
    res.json({
      status:'0',
      msg:'',
      result:req.cookies.userName || ''
    });
  }else{
    res.json({
      status:'1',
      msg:'未登录',
      result:''
    });
  }
});

router.get("/register", function(req, res, next){
  var userId=0;
  var param = {
    userName: req.query.userName,
    userPwd: req.query.userPwd
  }
  //console.log(req.query);
  User.findOne(param, function(err, doc){
      if(err){
        res.json({
          status: "1",
          msg: err.message
        });
      }else if(doc){
        console.log(doc);
          res.json({
            status: "1",
            msg:"用户名已存在"
          })
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
          }
        })
      }
  })
})

module.exports = router;
