/*专门支持index.html页面中所有功能的js文件*/
//当页面加载完成后，自动执行:
$(function(){
  $.ajax({
    url:"http://localhost:3000/index",
    type:"get",
    success:function(result){
      console.log(result);
      var p1=result.slice(0,3)
      // 标题  当季最热
      var html="";
      html+=`<h2><a href="hot.html">${p1[0].headline}<i></i></a></h2>`
      $(".index-body .contain aside").prepend(html)
      // 内容
      var html="";
      for(var p of p1){
        html+=`<li><a href="${p.href}"><img src="${p.pic}"> </a></li>`
      }
       $(".lvcheng").append(html)
      //  底部图片
      var p1=result.slice(3,4)
      var html="";
      html+=`<div><a href="${p1[0].href}"><img src="${p1[0].pic}"></a></div>`
      $(".index-body .contain aside").append(html);
      //出境游
      var p2s=result.slice(4,6)
      var html="";
      html+=`<a href="${p2s[0].href}">${p2s[0].headline}<i></i></a>`
      $(".contain section h2:first").append(html);
      //出境游
      var html="";
      for(var p of p2s){
     //  调用价格函数
     p.oprice=$oprice(p.oprice)
      html+=` <dl class="onwidth">
      <dt><a href="${p.href}">
          <img src="${p.pic}">
        </a>
        <i>${p.label}</i>
        <em></em>
      </dt>
      <dd> 
        <h3 class="chang"> <a href="${p.href}">
           ${p.title}
        </a></h3>
        <ul class="bian">
          <li>编号：${p.snumber}</li>
          <li class="day">行程：${p.route}</li>
          <li class="send">出发地：${p.site}</li>
        </ul>
        <div class="money">
          <div class="money_01">
            抢购价
            <span>￥</span>
            <strong>${p.price}</strong>
            起
            <del>${p.oprice}</del>
          </div>
          <div class="money_02">
            <a href="${p.href}" class="ibutton">${p.exist}</a>
          </div>
        </div>
      </dd>
    </dl>`
      }
     var $hgr01=$(".index-body article hgroup .hgr01:first")
    .prepend(html)
    .children(":last-child")
    .removeClass("onwidth")
    .addClass("tuwidth");
    // 出境游第二段
    var p2s=result.slice(6,9)
    var html="";
     for(var p2 of p2s){
      //  调用价格函数
      p2.oprice=$oprice(p2.oprice)
      html+=`<dl style="padding-bottom: 0px;">
      <dt>
          <a href="${p2.href}" target="_blank"><img src="${p2.pic}"></a>
          <i>${p2.label}</i>
                      </dt>
      <dd>
        <h3><a href="${p2.href}">${p2.title}</a>
                      </h3>
        <ul class="bian">
          <li>编号：${p2.snumber}</li>
          <li class="send">出发地：${p2.site}</li>                <li class="day">行程：${p2.route}</li>              </ul>
        <div class="money">
          <div class="money_01">抢购价：<span>￥</span><strong>${p2.price}</strong>起 <del>${p2.oprice}</del></div>
          <div class="money_02"><a href="${p2.href}" class="ibutton">${p2.exist}</a></div>
        </div>
      </dd>
    </dl>`
     }
     $hgr01.parent().next().append(html);
    //  周边游
     var p2s=result.slice(9,12)
     var html="";
    html+=`<a href="${p2s.href}">${p2s[0].headline}<i></i></a>`
      var $headline=$(".contain section:eq(1) h2").append(html)
     //内容
     var html="";
     
     for(var p2 of p2s){
      //  调用价格函数
      p2.oprice=$oprice(p2.oprice)
      html+=`<div class="hgr01 fd">
      <dl style="padding-bottom: 0px;">
      <dt>
          <a href="${p2.href}" target="_blank"><img src="${p2.pic}"></a>
          <i>${p2.label}</i>
                      </dt>
      <dd>
        <h3><a href="${p2.href}">${p2.title}</a>
                      </h3>
        <ul class="bian">
          <li>编号：${p2.snumber}</li>
          <li class="send">出发地：${p2.site}</li>                <li class="day">行程：${p2.route}</li>              </ul>
        <div class="money">
          <div class="money_01">抢购价：<span>￥</span><strong>${p2.price}</strong>起 <del>${p2.oprice}</del></div>
          <div class="money_02"><a href="${p2.href}" class="ibutton">${p2.exist}</a></div>
        </div>
      </dd>
    </dl>
      </div>
    `
     }
     $headline.parent().children(":last-child").append(html)
    //  国内游
    var p2s=result.slice(12,14)
    var html="";
    html+=`<a href="${p2s.href}">${p2s[0].headline}<i></i></a>`
    var $headline=$(".contain section:eq(2) h2").append(html)
    //国内左边
    var html="";
    for(var p2 of p2s){
    html+=`
    <dl style="padding-bottom: 0px;">
    <dt>
        <a href="${p2.href}" target="_blank"><img src="${p2.pic}"></a>
        <i>${p2.label}</i>
                    </dt>
    <dd>
      <h3><a href="${p2.href}">${p2.title}</a>
                    </h3>
      <ul class="bian">
        <li>编号：${p2.snumber}</li>
        <li class="send">出发地：${p2.site}</li>                <li class="day">行程：${p2.route}</li>              </ul>
      <div class="money">
        <div class="money_01">抢购价：<span>￥</span><strong>${p2.price}</strong>起 <del>${p2.oprice}</del></div>
        <div class="money_02"><a href="${p2.href}" class="ibutton">${p2.exist}</a></div>
      </div>
    </dd>
  </dl>`
    }
    $(".contain section:eq(2) hgroup .hgr01:eq(0)").prepend(html)

    // 国内中间
    var p2=result.slice(14,15)[0]
    var html="";
    html+=`
    <dl style="padding-bottom: 0px;">
    <dt>
        <a href="${p2.href}" target="_blank"><img src="${p2.pic}"></a>
        <i>${p2.label}</i>
                    </dt>
    <dd>
      <h3><a href="${p2.href}">${p2.title}</a>
                    </h3>
      <ul class="bian">
        <li>编号：${p2.snumber}</li>
        <li class="send">出发地：${p2.site}</li>                <li class="day">行程：${p2.route}</li>              </ul>
      <div class="money">
        <div class="money_01">抢购价：<span>￥</span><strong>${p2.price}</strong>起 <del>${p2.oprice}</del></div>
        <div class="money_02"><a href="${p2.href}" class="ibutton">${p2.exist}</a></div>
      </div>
    </dd>
  </dl>`
    $(".contain section:eq(2) hgroup .hgr02").prepend(html)
    // 国内右边
    var p2s=result.slice(15,17)
    var html="";
    for(var p2 of p2s){
    html+=`
    <dl style="padding-bottom: 0px;">
    <dt>
        <a href="${p2.href}" target="_blank"><img src="${p2.pic}"></a>
        <i>${p2.label}</i>
                    </dt>
    <dd>
      <h3><a href="${p2.href}">${p2.title}</a>
                    </h3>
      <ul class="bian">
        <li>编号：${p2.snumber}</li>
        <li class="send">出发地：${p2.site}</li>                <li class="day">行程：${p2.route}</li>              </ul>
      <div class="money">
        <div class="money_01">抢购价：<span>￥</span><strong>${p2.price}</strong>起 <del>${p2.oprice}</del></div>
        <div class="money_02"><a href="${p2.href}" class="ibutton">${p2.exist}</a></div>
      </div>
    </dd>
  </dl>`
    }
    $(".contain section:eq(2) hgroup .hgr03").prepend(html)
    var p2=result.slice(17,18)[0]
    html="";
    html+=`<a href="${p2.href}">
    <img src="${p2.pic}">
  </a>`
  $(".banner").prepend(html)
    //获取所有点击按钮并根据传递qa1  SZsxdeq进来的值动态加载
       $(".ibutton").each(function(i,elem){
         if($(elem).html()!=0){
          $(elem).addClass("exist").html("立即抢购")
         }else{
          $(elem).html("已售罄").attr("disabled",true);
          $(elem).click(function(){
            $(elem).removeAttr('href');//去掉a标签中的href属性
            location.href = "product1.html"
          })
         }
       })
    }
  })
})
//  Initialize Swiper 轮播图
var swiper = new Swiper('.swiper-container', {
  delay: 3000, //1秒切换一次
  autoplay: true,
  loop: true,
  pagination: {
  el: '.swiper-pagination',
  clickable: true,
  },
});