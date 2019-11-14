//获取本地登录状态
if (localStorage.getItem('users')) {
    // 本地存储中的状态
    var codeArr = JSON.parse(localStorage.getItem('users')).user;
    if (codeArr.length > 0) {//有数据
        $('.plussheadera_awrap_login').css('display', 'none');
        $('.plussheadera_awrap_loginlogin').css('display', 'block');
        $('.yuhuoa_xialayonghuo').text(`用户${codeArr}`)
    };
};

//获取本地登录状态

if (localStorage.getItem('colors')) {
    // 本地存储中的状态
    var colorArr = JSON.parse(localStorage.getItem('colors')).color;
    var memorysArr = JSON.parse(localStorage.getItem('memorys')).memory;
    var numberArr = JSON.parse(localStorage.getItem('numbers')).number;
    var priceArr = JSON.parse(localStorage.getItem('prices')).price;
    var imgArr = JSON.parse(localStorage.getItem('imgs')).img;
    var result = '';

    if (colorArr.length < 0) {
        $('.headera_wwarpag_center_two').css('display', 'none');
        $('.headera_wwarpag_center').css('display', 'block');
    } else if (colorArr.length >= 0) {//有数据
        $('.headera_wwarpag_center').css('display', 'none');
        $('.headera_wwarpag_center_two').css('display', 'block');

        $.each(colorArr, function (index, item) {
            result += `<ul class="shoppinga_ul">
            <li class="shoppinga_li">
                <div class="item1 clearfix">
                    <a href="#"><img src=${imgArr[index]}></a>
                    <a href="#">motorola g7 plus <i>${memorysArr[index]} ${colorArr[index]}</i></a>
                </div>
                <div class="item2">
                    <p>¥<i class="item2_i">${priceArr[index]}</i></p>
                </div>
                <div class="item3">
                    <div class="itme3_box">
                        <span class="span_jian">-</span>
                        <input type="text" id="val" value="${numberArr[index]}">
                        <span class="span_jia">+</span>
                    </div>
                    <div class="xiangou"></div>
                </div>
                <div class="item4">
                    <span>￥<i class="item4_i">${priceArr[index]}</i></span>
                </div>
                <span class="close_x">x</span>
            </li>
            </ul>
            <div class="shoppinga_cart_footer">
                <div class="shoppinga_cartfooter_left">
                    <p>商品总价：<em>¥<i class="item5_i">${priceArr[index]}</i></em></p>
                    <a href="https://www.motorola.com.cn/store"><em>&gt;&gt;</em> 返回继续购物</a>
                </div>
                <div class="shoppinga_cartfooter_right">
                    <p>总计（不含运费）：<em>¥<i class="item6_i">${priceArr[index]}</i></em></p>
                    <a class="qujiesuan" href="javascript:;">去结算</a>
                </div>
            </div> `;
        });
        $('.shoppinga_cart_head_cha').html(result);
        $('.close_x_three').on('click', function () {
            $('.maska_b').css('display', 'none');
            $('.headera_wwarpag_center').css('display', 'block');
            $('.headera_wwarpag_center_two').css('display', 'none');
            delcookie();
        });

        $('.qujiesuan').on('click', function () {
            $('#wangleai').css('display','block');
            setInterval(function () {
                var span=document.querySelector('.wangleaicaizi');
                span.style.background=randomColor();
            }, 100)
        })
    };
};







//购物车

var eleval = document.querySelector('#val');
var value = eleval.value * 1;
var itemOne = $('.item2_i').text();
var itemTwo = $('.item4_i').text();
var itemThree = $('.item5_i').text();
var itemFour = $('.item6_i').text();
var one = itemOne * 1;
var two = itemTwo * 1;
var three = itemThree * 1;
var four = itemFour * 1;
$('.item2_i').text(`${one * value + '.00'}`);
$('.item4_i').text(`${two * value + '.00'}`);
$('.item5_i').text(`${three * value + '.00'}`);
$('.item6_i').text(`${four * value + '.00'}`);
if (value < 1) {
    value = 1;
    eleval.value = value;
    $('.item2_i').text(`${one * eleval.value + '.00'}`);
    $('.item4_i').text(`${two * eleval.value + '.00'}`);
    $('.item5_i').text(`${three * eleval.value + '.00'}`);
    $('.item6_i').text(`${four * eleval.value + '.00'}`);
};

$('#val').change(function () {
    var input = $('#val').val() * 1;
    if (input < 1) {
        $('.xiangou').html('');
        $('#val').val("1");
        var inputOne = $('#val').val() * 1;
        $('.item2_i').text(`${one * inputOne + '.00'}`);
        $('.item4_i').text(`${two * inputOne + '.00'}`);
        $('.item5_i').text(`${three * inputOne + '.00'}`);
        $('.item6_i').text(`${four * inputOne + '.00'}`);
    } else if (input > 3) {
        $('#val').val("3");
        var inputOne = $('#val').val() * 1;
        $('.item2_i').text(`${one * inputOne + '.00'}`);
        $('.item4_i').text(`${two * inputOne + '.00'}`);
        $('.item5_i').text(`${three * inputOne + '.00'}`);
        $('.item6_i').text(`${four * inputOne + '.00'}`);
        $('.xiangou').html('每人限购三件');
    } else {
        $('.xiangou').html('');
        $('.item2_i').text(`${one * input + '.00'}`);
        $('.item4_i').text(`${two * input + '.00'}`);
        $('.item5_i').text(`${three * input + '.00'}`);
        $('.item6_i').text(`${four * input + '.00'}`);
    }
});

$('.span_jian').on('click', function () {
    value -= 1;
    $('.xiangou').html('');
    eleval.value = value;
    if (value < 1) {
        value = 1;
        eleval.value = value;
    };
    $('.item2_i').text(`${one * eleval.value + '.00'}`);
    $('.item4_i').text(`${two * eleval.value + '.00'}`);
    $('.item5_i').text(`${three * eleval.value + '.00'}`);
    $('.item6_i').text(`${four * eleval.value + '.00'}`);
    var num = eleval.value;
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
    codeArr.push(num);
    var jsonStr = JSON.stringify({ 'number': codeArr });
    localStorage.setItem('numbers', jsonStr); //更新本地存储数据
});

$('.span_jia').on('click', function () {
    value += 1;
    eleval.value = value;
    if (value > 3) {
        value = 3;
        eleval.value = value;
        $('.xiangou').html('每人限购三件');
    };
    $('.item2_i').text(`${one * eleval.value + '.00'}`);
    $('.item4_i').text(`${two * eleval.value + '.00'}`);
    $('.item5_i').text(`${three * eleval.value + '.00'}`);
    $('.item6_i').text(`${four * eleval.value + '.00'}`);
    var num = eleval.value;
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
    codeArr.push(num);
    var jsonStr = JSON.stringify({ 'number': codeArr });
    localStorage.setItem('numbers', jsonStr); //更新本地存储数据



});



//点击删除物品添加一个标记状态

$('.close_x').click(function () {
    $('.maska_b').css('display', 'block');
    $('.close_x').attr('id', 'dateindex_one');
});

$('.close_x_one').click(function () {
    $('.maska_b').css('display', 'none');
    $('.close_x').removeAttr('id');
});

$('.close_x_two').click(function () {
    $('.maska_b').css('display', 'none');
    $('.close_x').removeAttr('id');
});







//删除本地购物车cookie值
function delcookie() {

    localStorage.setItem('colors', ''); //更新本地存储数据

    localStorage.setItem('memorys', ''); //更新本地存储数据

    localStorage.setItem('numbers', ''); //更新本地存储数据

    localStorage.setItem('prices', ''); //更新本地存储数据

    localStorage.setItem('imgs', ''); //更新本地存储数据
}



$('.plussheadera_awrap_loginlogin_box').hover(function () {
    $('.plussheaderaal_box').fadeIn(500, 'swing').animate({}, {
        queue: true,
        duration: 500,
        easing: 'swing',
    });
}, function () {
    $('.plussheaderaal_box').css('display', 'none');
});






// 点击弹出注册
$('.plussheadera_awrap_login_zhuce').on('click', function () {
    $('.maska').css('display', 'block');
    $('.logina').css('display', 'block');
    $('.logina_login').css({ "color": "#7f7f7f", "border-bottom": "none" });
    $('.logina_add').css({ "color": "rgb(16, 186, 209)", "border-bottom": "3px solid rgb(16, 186, 209)" });
    $('.logina_module').css('display', 'none');
    $('.loginadda_module').css('display', 'block');
});

// 点击弹出登录
$('.plussheadera_awrap_login_denglu').on('click', function () {
    $('.maska').css('display', 'block');
    $('.logina').css('display', 'block');
    $('.logina_login').css({ "color": "rgb(16, 186, 209)", "border-bottom": "3px solid rgb(16, 186, 209)" });
    $('.logina_module').css('display', 'block');
    $('.loginadda_module').css('display', 'none');
    $('.logina_add').css({ "color": "#7f7f7f", "border-bottom": "none" });

});


//点击关闭登录框
$('.loginClose').on('click', function () {
    $('.maska').css('display', 'none');
    $('.logina').css('display', 'none');
    $('.loginaTxt').text('');
    $('.loginadda_txt').text('');
    $('#user').val('');
    $('#pass').val('');
    $('#adduser').val('');
    $('#addpass').val('');
    $('#usercheck').val('');

});
//点击切换账号登录
$('.logina_login').on('click', function () {
    $('.logina_login').css({ "color": "rgb(16, 186, 209)", "border-bottom": "3px solid rgb(16, 186, 209)" });
    $('.logina_module').css('display', 'block');
    $('.loginadda_module').css('display', 'none');
    $('.logina_add').css({ "color": "#7f7f7f", "border-bottom": "none" });

});

//点击切换注册账号
$('.logina_add').on('click', function () {
    $('.logina_login').css({ "color": "#7f7f7f", "border-bottom": "none" });
    $('.logina_add').css({ "color": "rgb(16, 186, 209)", "border-bottom": "3px solid rgb(16, 186, 209)" });
    $('.logina_module').css('display', 'none');
    $('.loginadda_module').css('display', 'block');
});


$('.register').on('click', function () {
    $('.logina_login').css({ "color": "#7f7f7f", "border-bottom": "none" });
    $('.logina_add').css({ "color": "rgb(16, 186, 209)", "border-bottom": "3px solid rgb(16, 186, 209)" });
    $('.logina_module').css('display', 'none');
    $('.loginadda_module').css('display', 'block');
});




//登录框聚焦
function closeadd(value, close) {
    $(value).keyup(function () {
        var ab = String($(value).val());
        if (ab.length > 0) {
            $(close).css('display', 'block');
        }
        if (ab.length <= 1) {
            $(close).css('display', 'none');
        };
    });
    $(close).on('click', function () {
        $(value).val('');
        $(close).css('display', 'none');
    });
};

closeadd('#user', '.loginaClose_a');
closeadd('#pass', '.loginaClose_b');
closeadd('#adduser', '.loginaClose_c');
closeadd('#addpass', '.loginaClose_d');


var numArr = [];
var smallArr = [];
var bigArr = [];
for (var i = 0; i < 10; i++) {
    numArr.push(i + '');
}
for (var i = 97; i <= 122; i++) {
    smallArr.push(String.fromCharCode(i))
}
for (var i = 65; i <= 90; i++) {
    bigArr.push(String.fromCharCode(i))
}
var allArr = numArr.concat(smallArr, bigArr);
var code = '';
for (var i = 0; i < 4; i++) {
    code += allArr[Math.floor(Math.random() * allArr.length)];
};
$('.checkeda_check').text(code);


$('.checkeda_check').on('click', function () {
    var numArr = [];
    var smallArr = [];
    var bigArr = [];
    for (var i = 0; i < 10; i++) {
        numArr.push(i + '');
    }
    for (var i = 97; i <= 122; i++) {
        smallArr.push(String.fromCharCode(i))
    }
    for (var i = 65; i <= 90; i++) {
        bigArr.push(String.fromCharCode(i))
    }
    var allArr = numArr.concat(smallArr, bigArr);
    var code = '';
    for (var i = 0; i < 4; i++) {
        code += allArr[Math.floor(Math.random() * allArr.length)];
    };
    $('.checkeda_check').text(code);
})

// 点击退出
$('.a_quit').on('click', function () {
    $('.plussheadera_awrap_login').css('display', 'block');
    $('.plussheadera_awrap_loginlogin').css('display', 'none');
    delcookie();
    $('.headera_wwarpag_center').css('display', 'block');
    $('.headera_wwarpag_center_two').css('display', 'none');

    var codeArr = JSON.parse(localStorage.getItem('users')).user;
    $.each(codeArr, function (index) {
        codeArr.splice(index, 1);//删除本地数据
    })

    // 同步本地存储中的数据
    var jsonStr = JSON.stringify({ "user": codeArr });

    // 存到本地
    localStorage.setItem('users', jsonStr);

});

function randomColor() {
    var r = Math.round(Math.random() * 255).toString(16);
    var g = Math.round(Math.random() * 255).toString(16);
    var b = Math.round(Math.random() * 255).toString(16);
    return '#' + r + g + b;
}


$('.login').on('click', function () {//登录
    var username = String($('#user').val());
    var userpass = String($('#pass').val());
    if (!username || !userpass) {
        $('.loginaTxt').css('color', 'red');
        $('.loginaTxt').text('账号或密码不能为空！');
        return;
    };
    $.ajax({
        url: './data/login.php',
        type: 'post',
        data: 'act=login&user=' + username + '&pass=' + userpass,
        dataType: 'json',
        success: function (json) {
            if (json.msg == "登陆成功") {
                $('.maska').css('display', 'none');
                $('.logina').css('display', 'none');
                $('.loginaTxt').text('');
                $('#user').val('');
                $('#pass').val('');
                $('.plussheadera_awrap_login').css('display', 'none');
                $('.plussheadera_awrap_loginlogin').css('display', 'block');
                $('.yuhuoa_xialayonghuo').text(`用户${username}`);
                //登录成功后在本地存取cookies值
                var user = username;
                if (localStorage.getItem('users')) {
                    var codeArr = JSON.parse(localStorage.getItem('users')).user;
                } else {
                    var codeArr = [];
                };
                codeArr.push(user);//添加数据
                var jsonStr = JSON.stringify({ "user": codeArr });//对象转成 json 字符串
                // 更新本地存储数据
                localStorage.setItem('users', jsonStr);
            } else {
                $('.loginaTxt').css('color', 'red');
                $('.loginaTxt').text('账号或密码不正确！');
            }
        },
        failed: function (code) {
            alert('错误代码' + code);
        }
    });
});

$('.add').on('click', function () {//注册
    var username = String($('#adduser').val());
    var userpass = String($('#addpass').val());
    var reg = /^1\d{10}$/;
    if (!username || !userpass) {
        $('.loginadda_txt').css('color', 'red');
        $('.loginadda_txt').text('账号或密码不能为空！');
    };
    if (!reg.test(username)) {
        $('.loginadda_txt').css('color', 'red');
        $('.loginadda_txt').text('请输入正确的手机号！');
        return;
    };
    if (userpass.length < 5 || userpass.length > 20) {
        $('.loginadda_txt').css('color', 'red');
        $('.loginadda_txt').text('密码长度不合格');
        return;
    };
    var numArr = [];
    var smallArr = [];
    var bigArr = [];
    for (var i = 0; i < 10; i++) {
        numArr.push(i + '');
    }
    for (var i = 97; i <= 122; i++) {
        smallArr.push(String.fromCharCode(i))
    }
    for (var i = 65; i <= 90; i++) {
        bigArr.push(String.fromCharCode(i))
    }
    var allArr = numArr.concat(smallArr, bigArr);
    var num = 0;
    var small = 0;
    var big = 0;
    for (var i = 0; i < userpass.length; i++) {
        if (numArr.includes(userpass[i])) {
            num = 1;
        }

        if (smallArr.includes(userpass[i])) {
            small = 1;
        }

        if (bigArr.includes(userpass[i])) {
            big = 1;
        }
    }

    var sum = num + small + big;

    if (sum < 2) {
        $('.loginadda_txt').css('color', 'red');
        $('.loginadda_txt').text('数字、字母、字符至少包含两种');
        return;
    };
    if ($('.checkeda_check').text() !== $('#usercheck').val()) {
        $('.lodinaddam_span_check').css('color', 'red');
        $('.lodinaddam_span_check').text('验证码不正确');
        return;
    };
    $.ajax({
        url: './data/login.php',
        type: 'post',
        data: 'act=add&user=' + username + '&pass=' + userpass,
        dataType: 'json',
        success: function (json) {
            if (json.msg == "注册成功") {
                $('.maska').css('display', 'none');
                $('.logina').css('display', 'none');
                $('.loginaTxt').text('');
                $('.plussheadera_awrap_login').css('display', 'none');
                $('.plussheadera_awrap_loginlogin').css('display', 'block');
                $('.yuhuoa_xialayonghuo').text(`用户${username}`);
                //注册后自动登录后在本地存取cookies值
                var user = username;
                if (localStorage.getItem('users')) {
                    var codeArr = JSON.parse(localStorage.getItem('users')).user;
                } else {
                    var codeArr = [];
                };
                codeArr.push(user);//添加数据
                var jsonStr = JSON.stringify({ "user": codeArr });//对象转成 json 字符串
                // 更新本地存储数据
                localStorage.setItem('users', jsonStr);
            } else if (json.msg == "此手机号已被注册") {
                $('.loginadda_txt').css('color', 'red');
                $('.loginadda_txt').text('此手机号已被注册');
            }
        },
        failed: function (code) {
            alert('错误代码' + code);
        }
    });
});