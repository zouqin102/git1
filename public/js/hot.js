$.ajax({
    url:"http://localhost:3000/hot",
    type:"get",
    success:function(resqut){
       var  p1=resqut.slice(-7)
       var html="";
       for(var p of p1){
           html+=` <a href="${p.href}">
           <div><img src="${p.pic}" ></div>
       </a><br><br>`
       }
       $(".hot").prepend(html)
    }
})