//  按钮的替换

//价格函数 每隔三位一个逗号
function $oprice(num) {
    //初始化成字符串
    var num = (num || 0).toString();
    var result = '';
    // 只要数值长度大于3就循环拼接
    // num 在这里会进行修改
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) { result = "￥"+num + result; }
    return result;
}
// 主nav的选中效果
$("#ahead li").each(function(i,elem){
    if( $(elem).data("id")==location.pathname){
        $("ahead li").removeClass()
        $(elem).addClass("header-color")
    }
})