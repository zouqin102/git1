$(function(){
  //1. 发送ajax请求，请求header.html中的<header>片段
  $.ajax({
    url:"header.html",
    type:"get",
    success:function(header){
      //2. 将片段替换到当前所在页面的<header>元素上
      $(header).replaceAll("header")
  //用片段创建新<header>     查找旧的<header>
      //3. 动态创建<link href="css/header.css",自动添加到当前页面的<head>元素内
      // $(`<link rel="stylesheet" href="css/header.css">`)
      // .appendTo("head") 
      // 动态创建缺陷: 当页面加载时第一时间找不到header.css导致样式丢失
    }
  })
})