const express=require("express")
const router=express.Router();
const pool=require("../pool")
//app.js: app.use("/product",product)
router.get("/",(req,res)=>{
    // 1.获取参数 pno pageSize
    var pno=req.query.pno;
    var ps=req.query.pageSize;
    // 2.sql
    if(!pno){
      pno=1;  //页码  
    }
    if(!ps){
      ps=12;  //页大小
    }
    var sql="select id,headline,pic,href,label,title,lately,snumber,site,route,price,oprice,exist,pid from ylc_product limit ?,?";
    var offset=(pno-1)*ps;
    ps=parseInt(ps)
    pool.query(sql,[offset,ps],(err,result)=>{
      if(err)throw err;
      res.send({code:1,data:result});
    })
})
module.exports=router;