const express=require("express")
const router=express.Router();
const pool=require("../pool")
//app.js: app.use("/register",Register)
router.post("/register",(req,res)=>{
  var obj=req.query;
  //验证数据是否为空
  if(!obj.uname){
    res.send({code:401,msg:"用户名不能为空"})
    return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:"密码不能为空"})
    return;
  }
  if((!obj.email) && (!obj.phone)){
    res.send({code:403,msg:"邮箱或手机号码不能为空"})
    return;
  }
  //执行sql语句，将对象插入到
  var sql=`INSERT INTO ylc_user SET ? `;
  pool.query(sql,[obj],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:200,msg:"注册成功"});
    }
  });
})
module.exports=router;