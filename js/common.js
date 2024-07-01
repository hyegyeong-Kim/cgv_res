const urlParams = new URL(location.href).searchParams;
    let scene = urlParams.get('scene');

    if(scene == null){
        scene = 1;
    }

$(document).ready(function(){

    $.ajax({
		url:'./pages/page_0'+scene+'.html', //호출할 파일 경로
		method:'get',
		success: function(html){
			$('.wrap').html(html); //호출한 파일을 대상 요소에 html로 담음
		}, complete: function(){
		}, error: function(){
			// $('.wrap').append('<strong>Error!!</strong>');
		}
	});
});

const link = {
	prev:()=>{
		console.log('p:'+scene);
		if(scene > 1){
			link.ajax(scene-1);
			location.href = '?scene='+(Number(scene)-1);
		}
	},
	next:()=>{
		link.ajax(scene+1);
		location.href = '?scene='+(Number(scene)+1);
	},
	ajax:(scene)=>{
		$.ajax({
			url:'./pages/page_0'+scene+'.html', //호출할 파일 경로
			method:'get',
			success: function(html){
				$('.wrap').html(html); //호출한 파일을 대상 요소에 html로 담음
			}, complete: function(){
			}, error: function(){
				$('.wrap').append('<strong>Error!!</strong>');
			}
		});
	}
}