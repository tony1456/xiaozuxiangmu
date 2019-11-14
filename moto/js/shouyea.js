//鼠标滑入滑出

$('.pull_down').hover(function () {
    $('.pull_down_sj').fadeIn(500, 'swing').animate({}, {
        queue: true,
        duration: 500,
        easing: 'swing',
    });
    $('.headera_ww').show(500, 'swing').animate({}, {
        queue: true,
        duration: 500,
        easing: 'swing',
    });
}, function () {
    $('.headera_ww').css('display', 'none');
    $('.pull_down_sj').css('display', 'none');
});


$('.yonghuoa').hover(function () {
    $('.yuhuoa_xiala').fadeIn(500, 'swing').animate({}, {
        queue: true,
        duration: 500,
        easing: 'swing',
    });
}, function () {
    $('.yuhuoa_xiala').css('display', 'none');
});


//获取本地登录状态
if (localStorage.getItem('users')) {
    // 本地存储中的状态
    var codeArr = JSON.parse(localStorage.getItem('users')).user;
    if (codeArr.length > 0) {//有数据
        $('.loginaa_center').css('display', 'none');
        $('.loginab_center').css('display', 'block');
        $('.yuhuoa_xialayonghuo').text(`用户${codeArr}`)
    };
};




// 点击弹出登录
$('.me').on('click', function () {
    $('.maska').css('display', 'block');
    $('.logina').css('display', 'block');
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
    $('.loginaa_center').css('display', 'block');
    $('.loginab_center').css('display', 'none');
    var codeArr = JSON.parse(localStorage.getItem('users')).user;
    $.each(codeArr, function (index) {
        codeArr.splice(index, 1);//删除本地数据
    })

    // 同步本地存储中的数据
    var jsonStr = JSON.stringify({ "user": codeArr });

    // 存到本地
    localStorage.setItem('users', jsonStr);

});







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
                $('.loginaa_center').css('display', 'none');
                $('.loginab_center').css('display', 'block');
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
                $('.loginaa_center').css('display', 'none');
                $('.loginab_center').css('display', 'block');
                $('.yuhuoa_xialayonghuo').text(`用户${username}`)
                //注册自动登录后在本地存取cookies值
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

