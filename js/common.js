const urlParams = new URL(location.href).searchParams;
    let scene = urlParams.get('scene');

    if(scene == null){
        scene = 1;
    }

$(document).ready(function(){

    // $('.wrap').css('opacity',1);
    setTimeout(function(){
        $('.wrap').css('opacity',1);
    },350);
    link.ajax(Number(scene));

});

const link = {
    prev:()=>{
        if(scene > 1){
            link.ajax(Number(scene)-1);
            $('.wrap').off('transitionend');
            $('.wrap').css('opacity',0).on('transitionend', function(){
                location.href = '?scene='+(Number(scene)-1);
            });
        }
    },
    next:()=>{
        link.ajax(Number(scene)+1);
        $('.wrap').off('transitionend');
        $('.wrap').css('opacity',0).on('transitionend', function(){
            location.href = '?scene='+(Number(scene)+1);
        });
    },
    ajax:(scene)=>{
        $.ajax({
            url:'./pages/page_0'+scene+'.html', //호출할 파일 경로
            method:'get',
            success: function(html){
                setTimeout(function(){
                    $('.wrap').html(html); //호출한 파일을 대상 요소에 html로 담음
                },350);
            }, complete: function(){
            }, error: function(){
                // $('.wrap').append('<strong>Error!!</strong>');
            }
        });
    }
}