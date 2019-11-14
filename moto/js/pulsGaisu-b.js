//图片懒加载
(function ($) {
    $(window).on('scroll resize load', function (e) {
        var notFoundCount = 0, maxNotFound = 2, screenHeight = $(window).height();
        $('[data-lazy-src]').each(function () {
            var pos = this.getBoundingClientRect();
            if (pos.bottom <= 0) return true; // 如果当前图片在视野上方，继续往下查找
            if (pos.top >= screenHeight) return (notFoundCount++) < maxNotFound; // 如果连续超过 maxNotFound 张图片都在视野下方，停止查找
            var src = this.dataset.lazySrc;
            if (!src) return;
            if (this.nodeName === 'IMG') this.src = src;
            else this.style.backgroundImage = 'url(' + src + ')';
            this.removeAttribute('data-lazy-src');
        });
    });
})(jQuery);

//轮播
(function () {
    var BleftBtn = document.querySelector('.b_bg13 .prev-b');
    var BrightBtn = document.querySelector('.b_bg13 .next-b');
    var Bimg = document.querySelectorAll('#bx_slider-b li');

    var pagNumb = 0;//先将页数为0，从第一页开始

    BleftBtn.onclick = function () {
        animate(Bimg[pagNumb], { opacity: 0 });
        pagNumb--;  //页数-1
        if (pagNumb == -1) {
            pagNumb = 2;
        }
        animate(Bimg[pagNumb], { opacity: 1 });
    }
    BrightBtn.onclick = function () {
        animate(Bimg[pagNumb], { opacity: 0 });
        pagNumb++;//页数加1
        if (pagNumb == 3) {
            pagNumb = 0;
        }
        animate(Bimg[pagNumb], { opacity: 1 });
    }
    var timer = setInterval(function () {
        BrightBtn.onclick();
    }, 2000);

    function getStyle(ele) {
        if (ele.currentStyle) {
            return ele.currentStyle;
        } else {
            return getComputedStyle(ele, null);
        }
    }

    function animate(div, obj) {
        clearInterval(div.timer);
        div.timer = setInterval(function () {
            var flag = true;//假设已经到了目的地
            for (var key in obj) {
                var target = obj[key];
                if (key == 'opacity') {
                    var speed = (target - parseFloat(getStyle(div)[key])) * 100 / 3;
                    speed = (speed > 0 ? Math.ceil(speed) : Math.floor(speed));
                    var op = parseFloat(getStyle(div)[key]) + speed / 100;
                    div.style[key] = op;
                    if (parseFloat(getStyle(div)[key]) != target) {
                        flag = false;
                    }
                } else {
                    var speed = (target - parseInt(getStyle(div)[key])) / 3;
                    speed = (speed > 0 ? Math.ceil(speed) : Math.floor(speed));
                    div.style[key] = parseInt(getStyle(div)[key]) + speed + 'px';
                    if (parseInt(getStyle(div)[key]) != target) {
                        flag = false;
                    }
                }
            }
            // 必须等到所有的 属性都到达目的地 才能结束定时器
            if (flag == true) {
                clearInterval(div.timer);
            }
        }, 30);
    }
})()