
  var num=2;
var tiem=setInterval(function(){
    if(num>=1){
    $(".container h4 b").html(num)
    console.log(num)
       num--;
    }else{
        clearInterval(tiem)
        location.href = "product.html"
    }
},1000)