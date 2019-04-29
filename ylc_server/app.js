 //使用express构建web服务器
 //2:引入第三方模块
 const express=require('express');
 const bodyParser=require('body-parser');
 //2.1:引入express-session组件
 const session=require("express-session")
 //2.3：引入cors 
 const cors = require('cors'); 
 //引入路由器
 const Index=require("./routes/index.router")
 const product=require("./routes/product.router")
 const hot=require("./routes/hot.router")
 const Login=require("./routes/login.router");
 const Register=require("./routes/register.router");
 const Details=require("./routes/details.router");
 //创建web服务器
var server = express();
//配置session 
server.use(session({
  secret:"128",
  resave:false,
  saveUninitialized:true
}))
 //绑定事件监听 
server.listen(3000);
 //启用cors跨域，只允许http://127.0.0.1:8080的请求访问该服务端
server.use(cors({
  "origin":"*", 
   credentials:true
})); 
 //配置body-parser中间件 
server.use(bodyParser.urlencoded({
  extended:false
}));
 //托管静态资源到public下
server.use(express.static('public'));
/*使用路由器来管理路由*/
server.use("/index",Index);
server.use("/product",product);
server.use("/hot",hot);
server.use("/login",Login);
server.use("/register",Register);
server.use("/details",Details);
console.log("服务器测试:启动成功")