
// 登录的字变黑色
function login_black(){
    $('.state em').css({color: '#333333'});
}
// 登录
function login() {
    // 登录字变白色
    $('.state em').css({color: '#ffffff'});
    // 添加登陆的盒子
    $('.all').append('<div class="login">' +
        '<div class="login_content">' +
        '<img class="close_login" src="img/dkw.png" alt="">' +
        '<span>登录</span>' +
        '<div class="login_number"><input type="text" placeholder="请输入手机/邮箱"></div>' +
        '<div class="login_password"><input type="text" placeholder="请输入密码"></div>' +
        '<div class="reorfo"><div class="re">' +
        '<input name="" type="checkbox" value="" checked="checked" /><em>自动登录</em></div><em>忘记密码</em></div>' +
        '<div class="log">登录</div>' +
        '<i>还没账号？立即注册</i>' +
        '<ul>' +
        '<li><img class="in_weixin_normal" src="img/Signin_weixin_normal.png" alt=""><img class="in_weixin_pre" src="img/Signin_weixin_pre.png" alt="" style="display:none"></li>' +
        '<li><img class="in_qq_normal" src="img/Signin_qq_normal.png" alt=""><img class="in_qq_pre" src="img/Signin_qq_pre.png" alt="" style="display:none"></li>' +
        '<li><img class="in_weibo_normal" src="img/Signin_weibo_normal.png" alt=""><img class="in_weibo_pre" src="img/Signin_weibo_pre.png" alt="" style="display:none"></li>' +
        '</ul>' +
        '</div>' +
        '</div>');

    // 关闭登陆的盒子
    $('.close_login').click(function () {
        $('.login').hide();
        login_black();
    })


    // 按钮变亮
    $('.log').mouseover(function () {
        $(this).css({background: '#ffda4e'});
    })
    $('.log').mouseout(function () {
        $(this).css({background: '#ffcc00'});
    })

    // 点击出现注册的盒子
    $('.login i').click(function(){
        $('.login').hide();
        register();
    })

    // 微信
    $('.login_content ul li:eq(0) img:eq(0)').mouseover(function () {
        $('.in_weixin_normal').hide();
        $('.in_weixin_pre').show();
    })
    $('.login_content ul li:eq(0) img:eq(1)').mouseout(function () {
        $('.in_weixin_normal').show();
        $('.in_weixin_pre').hide();
    })
    // QQ
    $('.login_content ul li:eq(1) img:eq(0)').mouseover(function () {
        $('.in_qq_normal').hide();
        $('.in_qq_pre').show();
    })
    $('.login_content ul li:eq(1) img:eq(1)').mouseout(function () {
        $('.in_qq_normal').show();
        $('.in_qq_pre').hide();
    })
    // 微博
    $('.login_content ul li:eq(2) img:eq(0)').mouseover(function () {
        $('.in_weibo_normal').hide();
        $('.in_weibo_pre').show();
    })
    $('.login_content ul li:eq(2) img:eq(1)').mouseout(function () {
        $('.in_weibo_normal').show();
        $('.in_weibo_pre').hide();
    })

    // 忘记密码
    $('.reorfo em').click(function () {
        $('.login').hide();
        $('.all').append('<div class="forget_password">' +
            '<div class="forget">' +
            '<img class="close_forget" src="img/dkw.png" alt="">' +
            '<span>忘记密码</span>' +
            '<div class="forget_number"><input type="text" placeholder="请输入电话/邮箱"></div>' +
            '<div class="identi"><div class="for_code"><input type="text" placeholder="验证码"></div><em>获取验证码</em></div>' +
            '<div class="setnew">重置密码</div>' +
            '<i>又想起来了？</i>' +
            '</div>' +
            '</div>');
        // 点击关闭忘记密码盒子
        $('.close_forget').click(function(){
            $('.forget_password').hide();
            login_black();
        })
        // 又想起来了
        $('.forget_password i').click(function(){
            $('.forget_password').hide();
            login();
        })
        // 重置密码按钮变亮
        $('.setnew').mouseover(function(){
            $(this).css({background:'#ffda4e'});
        })
        $('.setnew').mouseout(function(){
            $(this).css({background:'#ffcc00'});
        })

        // 点击重置密码
        $('.setnew').click(function () {
            $('.forget_password').hide();
            $('.all').append('<div class="reset">' +
                '<div class="reset_password">' +
                '<img class="close_reset" src="img/dkw.png" alt="">' +
                '<span>重置密码</span>' +
                '<div class="new_password"><input type="text" placeholder="请输入新密码"></div>' +
                '<div class="confirm"><input type="text" placeholder="再次确认密码"></div>' +
                '<div class="ensure">确定</div>' +
                '</div>' +
                '</div>');
            // 关闭重置密码
            $('.close_reset').click(function(){
                $('.reset').hide();
                login_black();
            })
            // 确认重置密码按钮变亮
            $('.ensure').mouseover(function(){
                $(this).css({background:'#ffda4e'})
            })
            $('.ensure').mouseout(function(){
                $(this).css({background:'#ffcc00'})
            })
        })
    })
}

// 注册
function register(){
    // 添加注册盒子
    $('.all').append('<div class="register">' +
        '<div class="register_content">' +
        '<img class="close_regis" src="img/dkw.png" alt="">' +
        '<span>注册</span>' +
        '<div class="register_number"><input type="text" placeholder="请输入手机/邮箱"></div>' +
        '<div class="register_password"><input type="text" placeholder="请输入密码"></div>' +
        '<div class="identifying"><div class="code"><input type="text" placeholder="请输入验证码"></div><em>获取验证码</em></div>' +
        '<div class="regis">注册</div>' +
        '<i>已有账号？点击登录</i>' +
        '</div>' +
        '</div>  ');
    // 关闭注册
    $('.close_regis').click(function () {
        $('.register').hide();
    })

    // 注册按钮变亮
    $('.regis').mouseover(function () {
        $(this).css({background: '#ffda4e'});
    })
    $('.regis').mouseout(function () {
        $(this).css({background: '#ffcc00'});
    })

    // 已有账号登录
    $('.register i').click(function(){
        $('.register').hide();
        login();
    })
}

// 底部微博微信动效
function foot_mul(){
    // 底部微博微信动效
    $('.foot .foot_right ul:eq(1) li:eq(1) img:eq(0)').mouseover(function () {
        $('.weixin_logo').hide();
        $('.weixin_hover_logo').show();
    })
    $('.foot .foot_right ul:eq(1) li:eq(1) img:eq(1)').mouseout(function () {
        $('.weixin_hover_logo').hide();
        $('.weixin_logo').show();
    })
    $('.foot .foot_right ul:eq(1) li:eq(0) img:eq(0)').mouseover(function () {
        $('.weibo_logo').hide();
        $('.weibo_hover_logo').show();
    })
    $('.foot .foot_right ul:eq(1) li:eq(0) img:eq(1)').mouseout(function () {
        $('.weibo_hover_logo').hide();
        $('.weibo_logo').show();
    })
}