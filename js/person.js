$(function(){
    $('.media_con ul .lit_con .delete_co').click(function(){
        $('.all').append('<div class="mask_delete">' +
            '<div class="is_delete">' +
            '<span>确定删除此收藏？</span>' +
            '<div class="choose_isdelete">' +
               '<div class="cancel_delete">取消</div>' +
               '<div class="confirm_delete">确定</div>' +
            '</div>' +
            '</div>' +
            '</div>');

        $('.cancel_delete').click(function(){
            $('.mask_delete').css({display:'none'});
        })
    })

})