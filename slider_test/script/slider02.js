/**
 * Created by Administrator on 2018/3/6.
 */

window.onload = function () {
    var container = document.getElementById('container');
    var list = document.getElementById('list');
    var buttons = document.getElementById('buttons').getElementsByTagName('li');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    // var index = 1;

    function animate(offset) {
        // window.getComputedStyle(list, null).getPropertyValue("left")
        var fromLeft = parseInt(list.style.left) + offset;
        list.style.left = fromLeft + "px";
        if(fromLeft > 0){
            list.style.left = -4000 + "px";
        }
        if(fromLeft < -4000){
            list.style.left = 0 + "px";
        }

    }

    function buttonsshow(){
        for(var i = 0;i < buttons.length; i++){
            buttons[i].className = "";
        }
        buttons[-(parseInt(list.style.left)/1000)].className = "on";
    }



        timer = setInterval(function () {
            next.onclick();
        }, 2000);

        container.onmouseover = function() {
            clearInterval(timer);
        };
        container.onmouseout = function() {
            timer = setInterval(function () {
                next.onclick();
            }, 2000)
        };


   // buttons[0].onclick = function () {
   // /*    var index = document.getElementById('buttons').indexOf(buttons);
   //     list.style.left = -(1000*index);
   //     console.log(index);
   //     buttonsshow();*/
   //
   // };

/*        for(var i = 0;i<buttons.length;i++){
            //nodeList[i].index = i
            buttons[i].addEventListener("click", function(e){
                console.log(buttons.indexOf(buttons[i]))
            }, false);
        }*/
 /*   for(var i = 0; i<buttons.length; i++){
        var index = buttons.indexOf(buttons[i]);
        console.log(index);
    }
*/

    for (var i = 0; i < buttons.length; i++) {
        (function (i) {
            buttons[i].onclick = function () {
                /*  这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
                /*  由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
                var nindex = parseInt(list.style.left)/1000 - 1;
                var clickIndex = parseInt(this.getAttribute('index'));
                console.log(nindex,clickIndex,i);
                var offset = 1000 * (-nindex - clickIndex); //这个index是当前图片停留时的index
                animate(offset);
                buttonsshow();
            }
        })(i)
    }

    prev.onclick = function () {
        animate(1000);
        buttonsshow();
    };
    next.onclick = function () {
        animate(-1000);
        buttonsshow();
    };

}