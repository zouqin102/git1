const express=require("express")
const router=express.Router();
const pool=require("../pool")
//app.js: app.use("/index",Index)
router.get("/",(req,res)=>{
  var sql=`select id,headline,pic,href,label,rlabel,title,lately,snumber,site,route,price,oprice,exist,pid from ylc_index `;
  pool.query(sql,[],(err,result)=>{
    if(err) console.log(err);
    res.send(result);
  });
})
module.exports=router;