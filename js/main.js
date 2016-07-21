//加载事件
$(document).ready(function(){
  changeSkin();
})
//绑定事件
$(".skin li").click(function() {
    changeSkin($(this).text())
})
//自定义函数
function changeSkin(skin) {
    var skinNo;
    if (skin == null) {
        if (Cookies.get("skin") == null) {
            Cookies.set("skin", "2", { expires: 7 })
            skinNo = "2";
        }
        else {
            skinNo = Cookies.get("skin");
        }
    }
    else {
        Cookies.set("skin", skin, { expires: 7 })
        skinNo = skin;
    }
    $("#skin").attr("href","css/skin"+skinNo+".css");
    $(".skin li").removeClass("active");
    $('.skin'+skinNo).addClass("active");
}
