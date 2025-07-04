document.addEventListener('DOMContentLoaded', function() {
	$(".js_more_review").on('click', function(event){
		$(".tab_content.active .review.hide").removeClass("hide");
		$(this).hide();
	}); 

	$('#filter .btns .reset_btn').click(function(e) {
		e.preventDefault()
		const section = $(this).closest('form')
		section.find('input').prop('checked', false)
	})

	$(".agree input").on("change", function(){
		if($(this).prop("checked")){
			$(this).closest(".agree").addClass("checked");
		}
		else
		{
			$(this).closest(".agree").removeClass("checked");
		}
	})

})
