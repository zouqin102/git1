const express=require("express")
const router=express.Router();
const pool=require("../pool")
//app.js: server.use("/login",Login)
router.get("/login",(req,res)=>{
  //获取数据
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  //判断信息
  if(!uname){
    res.send({code:3,msg:"用户名不能为空"})
  }
  if(!upwd){
    res.send({code:4,msg:"密码不能为空"})
  }
  //sql查询 密码加密
  var sql=`select uid,uname,upwd from ylc_user where uname=? and upwd=md5(?)`;
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err) console.log(err);
    //返回数据为json
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"})
    }else{
      //将用户登陆在线凭据保存session对象
      var uid=result[0].uid
      req.session.uid=uid;
      res.send({code:1,msg:"登陆成功"})
    }
  });
})
module.exports=router;