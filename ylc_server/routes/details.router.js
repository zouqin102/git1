const express=require("express")
const router=express.Router();
const pool=require("../pool")
//app.js: app.use("/details",Details)
router.get("/",(req,res)=>{
  //接收参数did
   var did=req.query.did;
  //定义返回复杂数据的结构
  //  var output={
  //   details:null,//保存找到的一个商品详情
  //   specs:[] //保存和当前商品同系列的所有规格名的列表
  //  }
 // if(did!==undefined){
    var sql=`select dpic,dtitle,dnumber,droute,dstart,dend,dltype,dbuyprice,dprice,dttype,dtime,adult_price,child_price from ylc_details where did=?`;
    pool.query(sql,[did],(err,result)=>{
      if(err) console.log(err);
      res.send(result);
    });
  // }else{
  //   res.send(`该商品已下架`)
  // }
  
})
module.exports=router;