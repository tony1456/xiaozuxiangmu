
$(function () {
    //进入页面加载数据
    $.ajax({
        url: "data/goods-b.json",
        type: "get",
        dataType: "json",
        cache: false,
        success: function (json) {
            var result = '';
            $.each(json, function (index, item) {
                if (item.id == "a") {
                    result += `
                    <div class="product-b" code = "${item.id}">
                    <div class="product-b-pictures">
                        <div class="product-b-box">
                        <div class="slider-b-box slider-b-1">
                            <div class="img-b-box">
                                <span class="loading-b"></span>
                                <img src="${item.imgUrlL[0]}" id="middleImg1"/>
                                <img src="${item.imgUrlL[1]}" id="middleImg2"/>
                                <img src="${item.imgUrlL[2]}" id="middleImg3"/>
                                <img src="${item.imgUrlL[3]}" id="middleImg4"/>
                            </div>
                            <ul class="bx-page-b clearfix">
                                <li class="bx-pages1"><img src="${item.imgUrlS[0]}" /></li>
                                <li class="bx-pages2"><img src="${item.imgUrlS[1]}" class="page-img" /></li>
                                <li class="bx-pages3"><img src="${item.imgUrlS[2]}" class="page-img" /></li>
                                <li class="bx-pages4"><img src="${item.imgUrlS[3]}" class="page-img" /></li>
                            </ul>
                         </div>
                         </div>
                        </div>
                    <div class="goods-txt-b">
                    <h3 class="goods_title-b">motorola g7 plus <span class="nums-b">${item.guige[0]}</span> <span
                        class="fonts-b">${item.titles}</span></h3>
                    <p class="sale-b">
                        <a href="https://club.lenovo.com.cn/thread-5504914-1-1.html" target="_blank">
                            128GB大内存 | 丽音降噪通话无忧 | 光学防抖大光圈
                            <br />
                            <span class="sale-jbl">【赠】JBL耳机</span>
                        </a>
                    </p>
                    <ul class="sale-parameter-b">
                        <li class="item-b clearfix">
                            <span class="sale-t-b">价<i class="space-b"></i>格:</span>
                            <div class="price-b">
                                <span class="price-b1">${item.price[0]}</span>
                                <span class="price-b2">${item.price[1]}</span>
                            </div>
                        </li>
                        <li class="item-b clearfix">
                            <span class="sale-t-b">赠<i class="space-b"></i>品:</span>
                            <ul class="gifts-list-b">
                                <li>
                                    <a href="https://www.motorola.com.cn/store/168_578.html" target="_blank">
                                        <img src="img/7pluls/7plusspxqy/erji.png" />
                                        JBL L20R耳机 黑色 x1
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li class="item-b clearfix">
                            <span class="sale-t-b">支<i class="space-b"></i>持:</span>
                            <div class="support-b clearfix">
                                <span>
                                    <img src="img/7pluls/7plusspxqy/hb-icon.png" />
                                    花呗分期3期,6期免息
                                </span>
                                <span>
                                    <img src="img/7pluls/7plusspxqy/sf-icon.png" />
                                    顺丰配送
                                </span>
                                <span>
                                    <img src="img/7pluls/7plusspxqy/seven-icon.png" />
                                    7天无理由退货
                                </span>
                            </div>
                        </li>
                    </ul>
                    <div class="pro-parameter-b">
                        <h3 class="title-b">
                            选择规格
                        </h3>
                        <ul class="specattr-sel-b sel-one-b">
                            <li class="sku-b active span-b1 selected">
                                <span class="sel-icon-b"></span>
                                4GB+128GB
                            </li>
                            <li class="sku-b span-b2">
                                <span class="sel-icon-b"></span>
                                6GB+128GB
                            </li>
                        </ul>
                        <div class="pro-parameter">
                            <h3 class="title-b">选择颜色</h3>
                            <ul class="specattr-sel-b sel-two-b">
                                <li class="sku-b selected active hong-b">
                                    <span class="sel-icon-b"></span>
                                    中国红
                                </li>
                                <li class="sku-b lan-b">
                                    <span class="sel-icon-b "></span>
                                    深海蓝
                                </li>
                            </ul>
                        </div>
                        <div class="content-b">
                            <div class="pro-parameter-b">
                                <h3 class="title-b">选择数量</h3>
                                <div class="product-num-b">
                                <span class="minus-b">-</span>
                                <input type="text" class="num-ipt-b" value="1" />
                                <span class="plus-b">+</span>
                                <div class="tishi-b">限购三件，好东西要一起分享哦！</div>
                            </div>
                        </div>
                        <div class="buy-btn-b">
                            <a href="#" class="btn-cart-b buycar-b">加入购物车</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
                `
                }
            })
            $('.json-b').html(result);
            tabImg(); //执行图片列表切换函数
        }
    })

    //加载b1商品数据
    $('.json-b').on('click', '.sel-two-b>.lan-b', function () {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('.fonts-b').html($(this).html());
        $.ajax({
            url: "data/goods-b.json",
            type: "get",
            dataType: "json",
            cache: false,
            success: function (json) {
                var result = '';
                $('.product-b-box').html('');
                $.each(json, function (index, item) {
                    if (item.id == "b") {
                        result += `
                                <div class="product-b-box">
                                <div class="slider-b-box slider-b-1">
                                <div class="img-b-box">
                                    <span class="loading-b"></span>
                                    <img src="${item.imgUrlL[0]}" id="middleImg1"/>
                                    <img src="${item.imgUrlL[1]}" id="middleImg2"/>
                                    <img src="${item.imgUrlL[2]}" id="middleImg3"/>
                                    <img src="${item.imgUrlL[3]}" id="middleImg4"/>
                                </div>
                                <ul class="bx-page-b clearfix">
                                    <li class="bx-pages1"><img src="${item.imgUrlS[0]}" /></li>
                                    <li class="bx-pages2"><img src="${item.imgUrlS[1]}" class="page-img" /></li>
                                    <li class="bx-pages3"><img src="${item.imgUrlS[2]}" class="page-img" /></li>
                                    <li class="bx-pages4"><img src="${item.imgUrlS[3]}" class="page-img" /></li>
                                </ul>
                            </div>
                                    `
                    }
                })
                $('.product-b-box').html(result);
                tabImg();
            }
        })
        //判断是否登录状态，是保存本地存储
        if (localStorage.getItem('users')) {
            var userArr = JSON.parse(localStorage.getItem('users')).user;
            if (userArr.length > 0) {
                setLan();
            }
        }
    })

    //加载a1商品数据
    $('.json-b').on('click', '.sel-two-b>.hong-b', function () {
        $(this).siblings().removeClass('selected');
        $(this).addClass('selected');
        $('.fonts-b').html($(this).html());
        $.ajax({
            url: "data/goods-b.json",
            type: "get",
            dataType: "json",
            cache: false,
            success: function (json) {
                var result = '';
                $('.product-b-box').html('');
                $.each(json, function (index, item) {
                    if (item.id == "a") {
                        result += `
                                <div class="product-b-box">
                                <div class="slider-b-box slider-b-1">
                                <div class="img-b-box">
                                    <span class="loading-b"></span>
                                    <img src="${item.imgUrlL[0]}" id="middleImg1"/>
                                    <img src="${item.imgUrlL[1]}" id="middleImg2"/>
                                    <img src="${item.imgUrlL[2]}" id="middleImg3"/>
                                    <img src="${item.imgUrlL[3]}" id="middleImg4"/>
                                </div>
                                <ul class="bx-page-b clearfix">
                                    <li class="bx-pages1"><img src="${item.imgUrlS[0]}" /></li>
                                    <li class="bx-pages2"><img src="${item.imgUrlS[1]}" class="page-img" /></li>
                                    <li class="bx-pages3"><img src="${item.imgUrlS[2]}" class="page-img" /></li>
                                    <li class="bx-pages4"><img src="${item.imgUrlS[3]}" class="page-img" /></li>
                                </ul>
                            </div>
                                    `
                    }
                })
                $('.product-b-box').html(result);
                tabImg();
            }
        })
        //判断是否登录状态，是保存本地存储
        if (localStorage.getItem('users')) {
            var userArr = JSON.parse(localStorage.getItem('users')).user;
            if (userArr.length > 0) {
                setHong();
            }
        }
    })

    //商品图片列表切换
    function tabImg() {
        $('.bx-pages1').on('mouseover', function () {
            $('#middleImg1').css('display', 'block');
            $('#middleImg2').css('display', 'none');
            $('#middleImg3').css('display', 'none');
            $('#middleImg4').css('display', 'none');
            $('.bx-page-b li').css('borderColor', '#fff');
            $(this).css('borderColor', '#ddd');

        });
        $('.bx-pages2').on('mouseover', function () {
            $('#middleImg2').css('display', 'block');
            $('#middleImg1').css('display', 'none');
            $('#middleImg3').css('display', 'none');
            $('#middleImg4').css('display', 'none');
            $('.bx-page-b li').css('borderColor', '#fff');
            $(this).css('borderColor', '#ddd');
        });
        $('.bx-pages3').on('mouseover', function () {
            $('#middleImg2').css('display', 'none');
            $('#middleImg1').css('display', 'none');
            $('#middleImg3').css('display', 'block');
            $('#middleImg4').css('display', 'none');
            $('.bx-page-b li').css('borderColor', '#fff');
            $(this).css('borderColor', '#ddd');
        });
        $('.bx-pages4').on('mouseover', function () {
            $('#middleImg2').css('display', 'none');
            $('#middleImg1').css('display', 'none');
            $('#middleImg3').css('display', 'none');
            $('#middleImg4').css('display', 'block');
            $('.bx-page-b li').css('borderColor', '#fff');
            $(this).css('borderColor', '#ddd');
        });
    }

    //保存到本地存储
    function keepKookie() {
        var color = '中国红';
        if (localStorage.getItem('colors')) {
            var colorArr1 = JSON.parse(localStorage.getItem('colors')).color;
            $.each(colorArr1, function (index) {
                colorArr1.splice(index, 1);//删除本地数据
            });
            var jsonStr = JSON.stringify({ 'color': colorArr1 });
            localStorage.setItem('colors', jsonStr); //更新本地存储数据
        } else {
            var colorArr1 = [];
        }
        colorArr1.push(color);
        var jsonStr = JSON.stringify({ 'color': colorArr1 });
        localStorage.setItem('colors', jsonStr); //更新本地存储数据

        var memory = '4GB+128GB';
        if (localStorage.getItem('memory')) {
            var memoryArr1 = JSON.parse(localStorage.getItem('memorys')).memory;
            $.each(memoryArr1, function (index) {
                memoryArr1.splice(index, 1);//删除本地数据
            });
            var jsonStr = JSON.stringify({ 'memory': memoryArr1 });
            localStorage.setItem('memorys', jsonStr); //更新本地存储数据
        } else {
            var memoryArr1 = [];
        };
        memoryArr1.push(memory);
        var jsonStr = JSON.stringify({ 'memory': memoryArr1 });
        localStorage.setItem('memorys', jsonStr); //更新本地存储数据

        var price = '2099';
        if (localStorage.getItem('price')) {
            var priceArr1 = JSON.parse(localStorage.getItem('prices')).price;
            $.each(priceArr1, function (index) {
                priceArr1.splice(index, 1);//删除本地数据
            });
            var jsonStr = JSON.stringify({ 'price': priceArr1 });
            localStorage.setItem('prices', jsonStr); //更新本地存储数据

        } else {
            var priceArr1 = [];
        };
        priceArr1.push(price);
        var jsonStr = JSON.stringify({ 'price': priceArr1 });
        localStorage.setItem('prices', jsonStr); //更新本地存储数据

        var img = "img/7pluls/7plusspxqy/h1.png";
        if (localStorage.getItem('imgs')) {
            var imgArr1 = JSON.parse(localStorage.getItem('imgs')).img;
            $.each(imgArr1, function (index) {
                imgArr1.splice(index, 1);//删除本地数据
            });
            var jsonStr = JSON.stringify({ 'img': imgArr1 });
            localStorage.setItem('imgs', jsonStr); //更新本地存储数据
        } else {
            var imgArr1 = [];
        };
        imgArr1.push(img);
        var jsonStr = JSON.stringify({ 'img': imgArr1 });
        localStorage.setItem('imgs', jsonStr); //更新本地存储数据
        //商品数量保存本地
        var countInput = $('.num-ipt-b');
        var number = countInput.val();
        if (localStorage.getItem('number')) {
            var codeArr = JSON.parse(localStorage.getItem('numbers')).number;
            $.each(codeArr, function (index) {
                codeArr.splice(index, 1);//删除本地数据
            });
            var jsonStr = JSON.stringify({ 'number': codeArr });
            localStorage.setItem('numbers', jsonStr); //更新本地存储数据
        } else {
            var codeArr = [];
        };
        codeArr.push(number);
        var jsonStr = JSON.stringify({ 'number': codeArr });
        localStorage.setItem('numbers', jsonStr); //更新本地存储数据
    }

    //商品颜色/图片选择并更新保存本地数据
    function setHong() {
        var color = '中国红';
        $('body').on('click', '.buycar-b', function () {
            if (localStorage.getItem('colors')) {
                var colorArr1 = JSON.parse(localStorage.getItem('colors')).color;
                $.each(colorArr1, function (index) {
                    colorArr1.splice(index, 1);//删除本地数据
                });
                var jsonStr = JSON.stringify({ 'color': colorArr1 });
                localStorage.setItem('colors', jsonStr); //更新本地存储数据
            } else {
                var colorArr1 = [];
            };
            colorArr1.push(color);
            var jsonStr = JSON.stringify({ 'color': colorArr1 });
            localStorage.setItem('colors', jsonStr); //更新本地存储数据
        })
        var img = "img/7pluls/7plusspxqy/h1.png";
        $('body').on('click', '.buycar-b', function () {
            if (localStorage.getItem('imgs')) {
                var imgArr1 = JSON.parse(localStorage.getItem('imgs')).img;
                $.each(imgArr1, function (index) {
                    imgArr1.splice(index, 1);//删除本地数据
                });
                var jsonStr = JSON.stringify({ 'img': imgArr1 });
                localStorage.setItem('imgs', jsonStr); //更新本地存储数据
            } else {
                var imgArr1 = [];
            };
            imgArr1.push(img);
            var jsonStr = JSON.stringify({ 'img': imgArr1 });
            localStorage.setItem('imgs', jsonStr); //更新本地存储数据
        })
    }

    //商品颜色/图片选择并更新保存本地数据
    function setLan() {
        var color = '深海蓝';
        $('body').on('click', '.buycar-b', function () {
            if (localStorage.getItem('colors')) {
                var colorArr2 = JSON.parse(localStorage.getItem('colors')).color;
                $.each(colorArr2, function (index) {
                    colorArr2.splice(index, 1);//删除本地数据
                });
                var jsonStr = JSON.stringify({ 'color': colorArr2 });
                localStorage.setItem('colors', jsonStr); //更新本地存储数据
            } else {
                var colorArr2 = [];
            };
            colorArr2.push(color);
            var jsonStr = JSON.stringify({ 'color': colorArr2 });
            localStorage.setItem('colors', jsonStr); //更新本地存储数据
        })
        var img = "img/7pluls/7plusspxqy/ls1x.png";
        $('body').on('click', '.buycar-b', function () {
            if (localStorage.getItem('imgs')) {
                var imgArr2 = JSON.parse(localStorage.getItem('imgs')).img;
                $.each(imgArr2, function (index) {
                    imgArr2.splice(index, 1);//删除本地数据
                });
                var jsonStr = JSON.stringify({ 'img': imgArr2 });
                localStorage.setItem('imgs', jsonStr); //更新本地存储数据

            } else {
                var imgArr2 = [];
            };
            imgArr2.push(img);
            var jsonStr = JSON.stringify({ 'img': imgArr2 });
            localStorage.setItem('imgs', jsonStr); //更新本地存储数据
        })
    }

    //价格和内存选择
    $('.json-b').on('click', '.sel-one-b>.span-b1', function () {
        $('.price-b2').css('display', 'none');
        $('.price-b1').css('display', 'block');
        var spanb = '<span class="sale-jbl">【赠】JBL耳机</span>';
        $('.sale-b a').append(spanb);
        if (localStorage.getItem('users')) {
            var userArr = JSON.parse(localStorage.getItem('users')).user;
            if (userArr.length > 0) {
                fourG();
            }
        }
    })

    // 价格和内存选择
    $('.json-b').on('click', '.sel-one-b>.span-b2', function () {
        $('.price-b1').css('display', 'none');
        $('.price-b2').css('display', 'block');
        $('.sale-jbl').remove();
        if (localStorage.getItem('users')) {
            var userArr = JSON.parse(localStorage.getItem('users')).user;
            if (userArr.length > 0) {
                sixG();
            }
        }
    })

    //切换内存规格
    function tabchose() {
        $('.json-b').on('click', '.sel-one-b>.sku-b', function () {
            $(this).siblings().removeClass('selected');
            $(this).addClass('selected');
            $('.nums-b').html($(this).html());
        })
    }

    // 点击切换商品规格并更新本地数据
    function fourG() {
        //商品价格选择
        var price = '2099';
        $('body').on('click', '.buycar-b', function () {
            if (localStorage.getItem('price')) {
                var priceArr1 = JSON.parse(localStorage.getItem('prices')).price;
                $.each(priceArr1, function (index) {
                    priceArr1.splice(index, 1);//删除本地数据
                });
                var jsonStr = JSON.stringify({ 'price': priceArr1 });
                localStorage.setItem('prices', jsonStr); //更新本地存储数据
            } else {
                var priceArr1 = [];
            };
            priceArr1.push(price);
            var jsonStr = JSON.stringify({ 'price': priceArr1 });
            localStorage.setItem('prices', jsonStr); //更新本地存储数据
        })
        //商品内存选择
        var memory = '4GB+128GB';
        $('body').on('click', '.buycar-b', function () {
            if (localStorage.getItem('memory')) {
                var memoryArr1 = JSON.parse(localStorage.getItem('memorys')).memory;
                $.each(memoryArr1, function (index) {
                    memoryArr1.splice(index, 1);//删除本地数据
                });
                var jsonStr = JSON.stringify({ 'memory': memoryArr1 });
                localStorage.setItem('memorys', jsonStr); //更新本地存储数据
            } else {
                var memoryArr1 = [];
            };
            memoryArr1.push(memory);
            var jsonStr = JSON.stringify({ 'memory': memoryArr1 });
            localStorage.setItem('memorys', jsonStr); //更新本地存储数据
        })
    }

    //点击切换商品规格并更新本地数据
    function sixG() {
        //商品价格选择
        var price = '2399';
        $('body').on('click', '.buycar-b', function () {
            if (localStorage.getItem('price')) {
                var priceArr2 = JSON.parse(localStorage.getItem('prices')).price;
                $.each(priceArr2, function (index) {
                    priceArr2.splice(index, 1);
                });
                var jsonStr = JSON.stringify({ 'price': priceArr2 });
                localStorage.setItem('prices', jsonStr);
            } else {
                var priceArr2 = [];
            };
            priceArr2.push(price);
            var jsonStr = JSON.stringify({ 'price': priceArr2 });
            localStorage.setItem('prices', jsonStr);
        })
        //商品内存选择
        var memory = '6GB+128GB';
        $('body').on('click', '.buycar-b', function () {
            if (localStorage.getItem('memory')) {
                var memoryArr2 = JSON.parse(localStorage.getItem('memorys')).memory;
                $.each(memoryArr2, function (index) {
                    memoryArr2.splice(index, 1);//删除本地数据
                });
                var jsonStr = JSON.stringify({ 'memory': memoryArr2 });
                localStorage.setItem('memorys', jsonStr); //更新本地存储数据
            } else {
                var memoryArr2 = [];
            };
            memoryArr2.push(memory);
            var jsonStr = JSON.stringify({ 'memory': memoryArr2 });
            localStorage.setItem('memorys', jsonStr); //更新本地存储数据
        })
    }

    tabchose();
    goTop();
    products();

    //判断kookie是否存值,有的话给购物车添加数量
    if (localStorage.getItem('colors')) {
        var colorArr = JSON.parse(localStorage.getItem('colors')).color;
        if (colorArr.length >= 0) {
            $('.cardb').text('1')
        } else {
            $('.cardb').text('0');
        }
    }

    //保存本地数据
    $('body').on('click', '.buycar-b', function () {
        if (localStorage.getItem('users')) {
            var userArr = JSON.parse(localStorage.getItem('users')).user;
            if (userArr.length > 0) {
                location.href = "shoppingcara.html";
                keepKookie();
            } else {
                $('.maska').css('display', 'block');
                $('.logina').css('display', 'block');
                $('.logina_login').css({ "color": "rgb(16, 186, 209)", "border-bottom": "3px solid rgb(16, 186, 209)" });
                $('.logina_module').css('display', 'block');
                $('.loginadda_module').css('display', 'none');
                $('.logina_add').css({ "color": "#7f7f7f", "border-bottom": "none" });
            }
        } else {
            $('.maska').css('display', 'block');
            $('.logina').css('display', 'block');
            $('.logina_login').css({ "color": "rgb(16, 186, 209)", "border-bottom": "3px solid rgb(16, 186, 209)" });
            $('.logina_module').css('display', 'block');
            $('.loginadda_module').css('display', 'none');
            $('.logina_add').css({ "color": "#7f7f7f", "border-bottom": "none" });
        };
    })

    //选择数量框判断
    $('body').on('keyup', '.product-num-b .num-ipt-b', function () {
        var countInput = $('.num-ipt-b');
        var e = e || window.event;
        var el = e.target || e.srcElement;
        var val = parseInt(Math.ceil(countInput.val()));
        if (val <= 1) {
            countInput.val(1);
            $('.tishi-b').css('display', 'none');
        } else if (val > 1 && val < 3) {
            countInput.val(2);
            $('.tishi-b').css('display', 'none');
        }
        else if (val >= 3) {
            countInput.val(3);
            $('.tishi-b').css('display', 'block')
        }
    })

    //选择数量
    $('body').on('click', '.product-num-b span', function (e) {
        var e = e || window.event;
        var el = e.target || e.srcElement;
        var cls = el.className;
        var countInput = $('.num-ipt-b');
        if (cls == 'plus-b') {
            if (countInput.val() >= 3) {
                var res = (parseInt(countInput.val()) * 1);
                countInput.val(res);
                $('.tishi-b').css('display', 'block');
                return;
            } else {
                var res = (parseInt(countInput.val()) + 1);
                countInput.val(res);
            }
        } else if (cls == 'minus-b') {
            if (countInput.val() > 1) {
                var res = (parseInt(countInput.val()) - 1);
                countInput.val(res);
                $('.tishi-b').css('display', 'none');
            } else if (countInput.val() == 1) {
                var res = (parseInt(countInput.val()) * 1);
                countInput.val(res);
            }
        }

        //保存number数据到本地
        var number = countInput.val();
        $('body').on('click', '.buycar-b', function () {
            if (localStorage.getItem('users')) {//判断是否是登录状态
                var userArr = JSON.parse(localStorage.getItem('users')).user;
                if (userArr.length > 0) {
                    if (localStorage.getItem('number')) {
                        var numArr = JSON.parse(localStorage.getItem('numbers')).number;
                        $.each(numArr, function (index) {
                            numArr.splice(index, 1);//删除本地数据
                        });
                        var jsonStr = JSON.stringify({ 'number': numArr });
                        localStorage.setItem('numbers', jsonStr); //更新本地存储数据
                    } else {
                        var numArr = [];
                    };
                    numArr.push(number);
                    var jsonStr = JSON.stringify({ 'number': numArr });
                    localStorage.setItem('numbers', jsonStr); //更新本地存储数据
                }
            }
        })
    })

    //顶部悬浮
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var topCount = document.querySelector('.json-b');
        var headerB = document.querySelector('.header-box-b');
        var productB = document.querySelector('.product-tab-b');
        var btnB = document.querySelector('.btn-b');
        var goTop = document.querySelector('.goTop-b');
        if (scrollTop >= topCount.offsetHeight) {
            headerB.style.position = 'fixed';
            headerB.style.width = '100%';
            headerB.style.top = 0;
            headerB.style.left = 0;
            productB.style.marginLeft = '161px';
            headerB.style.background = 'rgba(255,255,255,0.9)';
            headerB.style.boxShadow = '0 0 5px rgba(0,0,0,.1)';
            btnB.style.display = 'block';
            goTop.style.display = 'block';
        } else {
            headerB.style.position = 'initial';
            productB.style.marginLeft = 0;
            btnB.style.display = 'none';
            goTop.style.display = 'none';
        }
    }

    //商品详情切换
    function products() {
        $('.goods-cur-b').click(function () {
            $('.guige-b-box').css('display', 'none');
            $('.goods-images-b').css('display', 'block');
            $(this).siblings().removeClass('style-b');
            $(this).addClass('style-b');
            $(document).scrollTop(800);

        })

        $('.goods-cur-b2').click(function () {
            $('.goods-images-b').css('display', 'none');
            $('.guige-b-box').css('display', 'block');
            $(this).siblings().removeClass('style-b');
            $(this).addClass('style-b');
            $(document).scrollTop(800);
        })
    };

    //回到顶部
    function goTop() {
        var goTop = document.querySelector(".goTop-b");
        goTop.onclick = function () {
            $(document).scrollTop(0);
        }
    }
})


