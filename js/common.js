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

     /* add 24.07.09 panel */
     var link_arry = {
        title:['메인','예매','통합결제','피드'], //각 타이틀
        start_title:[3, 12, 20, 27], //각첫번째 페이지
        start:[4, 13, 21, 28],
        last:[33]
    };

    for(i=0; i<link_arry.title.length; i++){
        $('.panel').append(`<dl>
            <dt><a href="/?scene=`+link_arry.start_title[i]+`">`+link_arry.title[i]+`</a></dt>
            <dd>
                <ul></ul>
            </dd>
        </dl>`);

        if(link_arry.start[i+1] != undefined){

            for(j=link_arry.start[i]; j < link_arry.start[i+1]; j++){
                $('.panel dl').eq(i).find('ul').append(`<li>
                    <a href="/?scene=`+j+`">`+((j - link_arry.start[i]) + 1)+`</a>
                </li>`);
            }

        } else {

            for(j=link_arry.start[i]; j < (link_arry.last[0] + 1); j++){
                console.log('last j : '+j,' / ',i)
                $('.panel dl').eq(i).find('ul').append(`<li>
                    <a href="/?scene=`+j+`">`+((j - link_arry.start[i]) + 1)+`</a>
                </li>`);
            }

        }
    }
    
    $('.panel_cont').click(function(){
        if($('.panel_menu').hasClass('close')){
            $('.panel_menu').removeClass('close');
        } else {
            $('.panel_menu').addClass('close');
        }
    });

    if(scene != 1){
        $('.panel').addClass('show');
    }
    /* //add 24.07.09 panel */

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