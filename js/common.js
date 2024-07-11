/* 로그인 있을때 */
// const urlParams = new URL(location.href).searchParams;
// let scene = urlParams.get('scene');

// if(scene == null){
//     scene = 1;
// }

// $(document).ready(function(){

//     /* f12 방지 */
//     $(document).bind('keydown',function(e){
//         if ( e.keyCode == 123 /* F12 */) {
//             e.preventDefault();
//             e.returnValue = false;
//         }
//     });
//     /* //f12 방지 */

//     var login_id = 'test',
//         login_pw = '1234'

//     $('#login').click(function(){

//         id = document.getElementById('userId').value;
//         pw = document.getElementById('userPw').value;

//         if(id == '' || id != login_id || pw == '' || pw != login_pw){
//             alert('아이디/비밀번호를 확인해주세요.')
//         }

//         if(id == login_id && pw == login_pw){
//             $('#loginCheck').prop('checked',true)
//         }

//         if($('#loginCheck').is(':checked')){
//             setCookie("key", 1, 7);

//             setTimeout(function(){
//                 $('.wrap').css('opacity',1);
//                 $('.panel_menu').addClass('active');
//             },350);
//             link.ajax(Number(scene));

//             $('.login_sec').removeClass('show');
//         } else {
//             scene = null;
//             location.href = './';
//         }
//     });

//     /* cookie */
//     var key = getCookie("key");

//     if(key == 1){ // 그 전에 ID를 저장해서 처음 페이지 로딩 시, 입력 칸에 저장된 ID가 표시된 상태라면,
//         $("#loginCheck").attr("checked", true); // ID 저장하기를 체크 상태로 두기.
//     }

//     // $("#loginCheck").change(function(){ // 체크박스에 변화가 있다면,
//     //     console.log('asdfasdf')
//     //     if($(this).is(":checked")){ // ID 저장하기 체크했을 때,
//     //         setCookie("key", 1, 7); // 7일 동안 쿠키 보관
//     //     }else{ // ID 저장하기 체크 해제 시,
//     //         deleteCookie("key");
//     //     }
//     // });

//     if($("#loginCheck").is(":checked")){
        
//         setTimeout(function(){
//             $('.wrap').css('opacity',1);
//             $('.panel_menu').addClass('active');
//         },350);
//         link.ajax(Number(scene));

//         $('.login_sec').removeClass('show');
//     } else {
//         if(scene > 1){
//             location.href = './'
//         }
//         $('.login_sec').addClass('show');
//     }
//     /* //cookie */

//      /* add 24.07.09 panel */
//      var link_arry = {
//         title:['메인','예매','통합결제','피드'], //각 타이틀
//         start:[3, 12, 20, 27], //각첫번째 페이지
//         last:[33]
//     };

//     for(i=0; i<link_arry.title.length; i++){
//         $('.panel').append(`<dl>
//             <dt><a href="./?scene=`+link_arry.start[i]+`">`+link_arry.title[i]+`</a></dt>
//             <dd>
//                 <ul></ul>
//             </dd>
//         </dl>`);

//         if(link_arry.start[i+1] != undefined){

//             for(j=link_arry.start[i]; j < (link_arry.start[i+1] - 1); j++){
//                 $('.panel dl').eq(i).find('ul').append(`<li>
//                     <a href="./?scene=`+(j+1)+`">`+((j - link_arry.start[i]) + 1)+`</a>
//                 </li>`);
//             }

//         } else {

//             for(j=link_arry.start[i]; j < link_arry.last[0]; j++){
//                 $('.panel dl').eq(i).find('ul').append(`<li>
//                     <a href="./?scene=`+(j+1)+`">`+((j - link_arry.start[i]) + 1)+`</a>
//                 </li>`);
//             }

//         }
//     }
    
//     $('.panel_cont').click(function(){
//         if($('.panel_menu').hasClass('close')){
//             $('.panel_menu').removeClass('close');
//         } else {
//             $('.panel_menu').addClass('close');
//         }
//     });

//     if(scene != 1){
//         $('.panel').addClass('show');
//     }
//     /* //add 24.07.09 panel */

// });

// /* 우클릭 방지 */
// document.onmousedown=disableclick;
// status="우클릭을 금지합니다.";

// function disableclick(event){
//     if (event.button==2) {
//         alert(status);
//         return false;
//     }
// }
// /* //우클릭 방지 */

// const link = {
//     prev:()=>{
//         if(scene > 1){
//             link.ajax(Number(scene)-1);
//             $('.wrap').off('transitionend');
//             $('.wrap').css('opacity',0).on('transitionend', function(){
//                 location.href = '?scene='+(Number(scene)-1);
//             });
//         }
//     },
//     next:()=>{
//         link.ajax(Number(scene)+1);
//         $('.wrap').off('transitionend');
//         $('.wrap').css('opacity',0).on('transitionend', function(){
//             location.href = '?scene='+(Number(scene)+1);
//         });
//     },
//     ajax:(scene)=>{
//         $.ajax({
//             url:'./pages/page_0'+scene+'.html', //호출할 파일 경로
//             method:'get',
//             success: function(html){
//                 setTimeout(function(){
//                     $('.wrap').html(html); //호출한 파일을 대상 요소에 html로 담음
//                 },350);
//             }, complete: function(){
//             }, error: function(){
//                 // $('.wrap').append('<strong>Error!!</strong>');
//             }
//         });
//     }
// }

// /* cookie */
// function setCookie(cookieName, value, exdays){
//     var exdate = new Date();
//     exdate.setDate(exdate.getDate() + exdays);
//     var cookieValue = escape(value) + ((exdays==null) ? "" : "; expires=" + exdate.toGMTString());
//     document.cookie = cookieName + "=" + cookieValue;
// }

// function deleteCookie(cookieName){
//     var expireDate = new Date();
//     expireDate.setDate(expireDate.getDate() - 1);
//     document.cookie = cookieName + "= " + "; expires=" + expireDate.toGMTString();
// }

// function getCookie(cookieName) {
//     cookieName = cookieName + '=';
//     var cookieData = document.cookie;
//     var start = cookieData.indexOf(cookieName);
//     var cookieValue = '';
//     if(start != -1){
//         start += cookieName.length;
//         var end = cookieData.indexOf(';', start);
//         if(end == -1)end = cookieData.length;
//         cookieValue = cookieData.substring(start, end);
//     }
//     return unescape(cookieValue);
// }
/* //cookie */
/* //로그인 있을때 */



/* 로그인 없을 때 */

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
        start:[3, 12, 20, 27], //각첫번째 페이지
        last:[33]
    };

    for(i=0; i<link_arry.title.length; i++){
        $('.panel').append(`<dl>
            <dt><a href="./?scene=`+link_arry.start[i]+`">`+link_arry.title[i]+`</a></dt>
            <dd>
                <ul></ul>
            </dd>
        </dl>`);

        if(link_arry.start[i+1] != undefined){

            for(j=link_arry.start[i]; j < (link_arry.start[i+1] - 1); j++){
                $('.panel dl').eq(i).find('ul').append(`<li>
                    <a href="./?scene=`+(j+1)+`">`+((j - link_arry.start[i]) + 1)+`</a>
                </li>`);
            }

        } else {

            for(j=link_arry.start[i]; j < link_arry.last[0]; j++){
                console.log('last j : '+j,' / ',i)
                $('.panel dl').eq(i).find('ul').append(`<li>
                    <a href="./?scene=`+(j+1)+`">`+((j - link_arry.start[i]) + 1)+`</a>
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
                location.href = './?scene='+(Number(scene)-1);
            });
        }
    },
    next:()=>{
        link.ajax(Number(scene)+1);
        $('.wrap').off('transitionend');
        $('.wrap').css('opacity',0).on('transitionend', function(){
            location.href = './?scene='+(Number(scene)+1);
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
