/**
 * Created by Administrator on 2018/1/26.
 */
/**
 * Created by Administrator on 2018/1/5.
 */

//随机数
function randCount(range,min){
    var randomCount = Math.random();
    var randMin = randomCount * range;
    var widthR = min + randMin;
    return(parseInt(widthR));
}

var commentWidth = 420;      //留言区宽度
var mWidth = $(document).width()-commentWidth;
var miWidth = $(".first").width();
var mHeight = $(document).height();
var miHeight = $(".first").height();
var fWidth = mWidth - miWidth;       //message-item可移动宽度
var fHeight = mHeight - miHeight;       //message-item可移动高度
var imgArr = ["images/1.png","images/2.png","images/3.png","images/4.png"];    ////message-item背景图


//发送
$("#comment-btn").on("click",function() {
    var $text = $("textarea");
    if ($text.val().length < 10) {
        alert("输入必须大于10个字符");
    }else{
        $(".first").hide();
        $(".message ul .message-item").removeClass("current");
        $(".message ul").append("<li class='message-item current'><p>" + $text.val() + "</p><i class='showDate'>"+getDate()+"</i><i class='close1'></i></li>");
        $(".current").animate({right:randCount(fWidth,commentWidth)+"px",top:randCount(fHeight-40,20)+"px"},500);

        var img = randCount(imgArr.length,0);
        var currentImage=imgArr[img];
        $(".current").css("background","url("+currentImage+") no-repeat");

    }
    $text.val("");
});


//关闭
$(".message ul").on("click",".close1", function () {
    var $this = $(this);
    $this.parent().remove();
    if($(".message-item").length===0){
        $(".first").show();
    }
});

//时间
function getDate(){
    var myDate = new Date();
    var year=myDate.getFullYear();
    var month=myDate.getMonth()+1;
    var date=myDate.getDate();
    var h=myDate.getHours();
    var m=myDate.getMinutes();
    return now=year+'-'+p(month)+"-"+p(date)+" "+p(h)+':'+p(m);
}
function p(s) {
    return s < 10 ? '0' + s: s;
}

//移动
$(".message ul").on("mousedown",".message-item",function(e){

    $(".message ul .message-item").removeClass("cHover");
    $(this).addClass("cHover");

    var positionDiv = $(this).offset();
    var distenceX = e.pageX - positionDiv.left;
    var distenceY = e.pageY - positionDiv.top;

    $(document).mousemove(function(e){
        var x = e.pageX - distenceX;
        var y = e.pageY - distenceY;
        if(x<0){
            x=0;
        }
        else if(x>$(document).width()-$('.message-item').outerWidth(true)){
            x = $(document).width()-$('.message-item').outerWidth(true);
        }
        if(y<0){
            y=0;
        }
        else if(y>$(document).height()-$('.message-item').outerHeight(true)){
            y = $(document).height()-$('.message-item').outerHeight(true);
        }

        $('.cHover').css({
            'left':x+'px',
            'top':y+'px'
        });
    });
    $(document).mouseup(function(){
        $(document).off('mousemove');
    });
});
