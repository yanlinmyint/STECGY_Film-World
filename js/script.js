$(document).ready(function (){
	$win = $(window);
	$set = $('#all-movies .title');
	$btn = $('.fa-cog');

	
	$win.resize(function (){
		if($win.width() <= 768){
			$set.hide();
					
		}else{
			$times.hide();
			$sidebar.show();
			$bars.hide();
		}
	})

})


