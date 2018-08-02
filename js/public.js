$(function () {



    // 登录
    $('.state em').click(function () {
        // 登录的字体颜色变成白色
        login();
    })

    // 注册
    $('.state i').click(function () {
       register();
    })


    // 搜索效果
    $('.search').one('click', function () {
        $(this).animate({marginLeft: '540px'});
        $(this).after('<input class="search_input" placeholder="搜索" type="text" style="margin-top:18px;width:0;height:25px;font-size:16px;color:#333333;border:0;outline: none;padding-left:10px;background:none";/>');
        $('.search_input').animate({width: '160px'});
    })


    // 底部微博微信动效
    foot_mul();



})