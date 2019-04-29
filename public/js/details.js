/*专门支持details.html页面中所有功能的js文件*/
//当页面加载完成后，自动执行:
$(function(){
  //获得地址栏中的location.search=> ?did=1
  var did=location.search.slice(1).split("=")[1];
  $.ajax({
    url:"http://localhost:3000/details",
    type:"get",
    data:{did},//{did:did}
    dataType:"json",
    success:function(result){
      //output可以获得服务端返回的json对象
      console.log(result)
      console.log(result[0].dpic)
      var d=result[0];
      var html="";
      html=`
      <!-- 左边图片 -->
      <div class="floor2_left">
          <a href=""><img class="details-img" src="${d.dpic}" alt=""></a>
          <div class="chun">
              <div class="phonecall">
                  <span>咨询热线：400-618-6899 &nbsp; &nbsp; 工作时间(9:00-18:00) &nbsp; &nbsp; 客服:&nbsp; &nbsp;</span>
                  <a href="javascript:;"><img src="img/details/pa_002.jpg" alt="" title="点击这里给壹旅程发消息"></a>
              </div>
              <div><a href="javascript:;">分享</a></div>
          </div>
      </div>
      <!-- 右边文字 -->
      <div class="floor2_right">
          <h3>${d.dtitle}</h3>
          <p><span>产品编号：</span><span>${d.dnumber}</span> </p>
          <p><span>行程天数：</span><span>${d.droute}</span></p>
          <p><span>出发地：</span><span>${d.dstart}</span><span> 目的地：</span><span>${d.dend}</span></p>
          <p><span>抢购价：</span><span class="mycolor">¥<strong>${d.dbuyprice}</strong> </span><span >¥${d.dprice}</span></p>
          <p><span>套餐类型：</span> <span ><a  href="">${d.dttype}</a> </span></p>
          <p><span>出发日期：</span> <span>${d.dtime}</span></p>
          <p ><span >成人价：</span> <span class="mycolor">¥ <strong>${d.adult_price}</strong> /人 </span></p>
          <p><span>儿童价：</span><span class="mycolor">¥<strong>${d.child_price}</strong>/人 </span></p>
          <div class="details-pay">
              <div class="pay-btn">
                  <a  href=""><em></em> <span>马上预定</span></a>
              </div>
              <div class="shoucang">
                  <a  href=""> 收藏</a>
              </div>
          </div> 
      </div>`
  $(".datails-floor2").append(html);
    }
  })



  
/*详情导航条选中更改样式*/
var $btn=$(".title ul li a")
$btn.click(function(e){
    $btn.removeClass("title_click")
    $(e.target).addClass("title_click")
})
/* 详情页导航固定菜单顶部*/ 
$(function(){
    var nav=$(".title"); //得到导航对象
    var fixPay=$("#payfix")
    var win=$(window); //得到窗口对象
    var sc=$(document);//得到document文档对象。
    win.scroll(function(){
      if(sc.scrollTop()>=545){
        nav.addClass("navfix"); 
        fixPay.removeClass("payfix")
      }else{
       nav.removeClass("navfix");
       fixPay.addClass("payfix");
      }
    })  
})  

})