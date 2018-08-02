$(function(){
    $('.square li:eq(0) a img:eq(0)').mouseover(function(){
        $('.food_normal').css({display:'none'});
        $('.food_pre').css({display:'block'});
    })
    $('.square li:eq(0) a img:eq(1)').mouseout(function(){
        $('.food_pre').css({display:'none'});
        $('.food_normal').css({display:'block'});
    })

    $('.square li:eq(1) a img:eq(0)').mouseover(function(){
        $('.car_normal').css({display:'none'});
        $('.car_pre').css({display:'block'});
    })
    $('.square li:eq(1) a img:eq(1)').mouseout(function(){
        $('.car_pre').css({display:'none'});
        $('.car_normal').css({display:'block'});
    })
    $('.square li:eq(2) a img:eq(0)').mouseover(function(){
        $('.travel_normal').css({display:'none'});
        $('.travel_pre').css({display:'block'});
    })
    $('.square li:eq(2) a img:eq(1)').mouseout(function(){
        $('.travel_pre').css({display:'none'});
        $('.travel_normal').css({display:'block'});
    })
})