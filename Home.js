/*AUTHOR SINEAD NAUGHTON*/


$(function(){
	//FUNCTION TO TURN TESTIMONIAL QUOTE BLUE WHEN HOVERED OVER
	$(".quote").on({
		mouseenter: function(){
			$(this).css("background-color", "#B2E1ED");
		},
		mouseleave: function(){
			$(this).css("background-color", "white"); 
		}
	});
	
	//FUNCTION TO ALTERNATE THE MIDDLE SECTION OF THE HOME PAGE WITH TWO DIFFERENT PIECES OF CONTENT BY HIDING AND SHOWING
	$("#flex-container2").hide();

	function show_second(){
		$("#flex-container1").hide();
		$("#flex-container2").show();
		setTimeout(show_first,3000);
	}   

	function show_first(){
		$("#flex-container1").show();
		$("#flex-container2").hide();
		setTimeout(show_second,3000);
	}

	setTimeout(show_second,3000);
});