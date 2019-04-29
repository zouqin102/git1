$(function(){
//  Initialize Swiper 轮播图
var swiper = new Swiper('.swiper-container', {
    delay: 1000, //1秒切换一次
    autoplay: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  var pno=1
  // 分页器
  $(function() {
    $("#pagination2").pagination({
      currentPage: pno,//当前默认选中页数
      totalPage: 4, //总页数
      isShow: false, //首尾页的现实
      count: 4,  //显示页数 
      prevPageText: "< 上一页",
      nextPageText: "下一页 >",
      callback: function(current) {
        $("#current2").text(current)
        add(current)
      }
    });
  });
  add()
function add(current){
  $.ajax({
    url:"http://localhost:3000/product",
    type:"get",
    data:{
      pno:current,     //pno:pno      页码
      pageSize:11 //pageSize 页大小
    },
    success:function(result){
      console.log(result.data)
      var p1=result.data;
      var html="";
      for(var p of p1){
        //  调用价格函数
      // p.oprice=$oprice(p.oprice)
      // p.price=$oprice(p.price)
      html+=`<section class="pong">
      <ul>
        <li>
          <!-- 左边图 -->
          <div class="img-fath">
            <a href="${p.href}"><img src="${p.pic}" alt=""></a>
            <i>${p.label}</i>
          </div>
          <!-- 中间详情页 -->
          <div>
            <h3><a href=""> ${p.headline}</a></h3>
            <span>${p.title}</span>
            <ul>
              <li class="out1">编号：${p.snumber}</li>
              <li class="out2">出发地：${p.site}</li>
              <li class="out3">行程:${p.route}</li>
              <li class="red">最近班次：${p.lately}</li>
            </ul>
          </div>
          <!-- 右边订购板块 -->
          <div>
            <dl>
              <dt>抢购价<b>${p.price}</b>起</dt>
              <dd>${p.oprice}</dd>
            </dl>
            <div>
              <a href="${p.href}">立即抢购</a>
            </div>
          </div>
        </li>
      </ul>
    </section>`
  }
  $(".product").html("").prepend(html)
    }
  })
}
  

})