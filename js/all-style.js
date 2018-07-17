$(document).ready(function(){
	// For Mobile Menu
	$("#mobilemenu").click(function(){
		$("header .custnav ul.menus").slideToggle();
	});
	function nav(){
	    if ($(window).width() > 1199) {
	        $("header .custnav ul.menus").css({"display":"block"});
	    }
	    else
	    {
	        $("header .custnav ul.menus").css({"display":"none"});
	    }
	}
	$(window).resize(function() {
		setTimeout(function(){nav();},0);
	});

	$("header .searchbar .search").click(function(){
		$(".searchpopup").addClass("popupactive");
	});

	$(".closebtn").click(function(){
		$(".searchpopup").removeClass("popupactive");
	});

	$(function () {
	  $("#datepicker1").datepicker({ 
	        autoclose: true, 
	        todayHighlight: true
	  }).datepicker('update', new Date());
	});

	$(".quicksearch .searchbox .options .lists li .activitytype").click(function(){
		$(".quicksearch .searchbox .activitylist").slideToggle();
	});

	$("#imgslider").owlCarousel({
		loop:true,
        navigation : true,
        smartSpeed:1000,
	    autoplayTimeout:2700,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        }
	    }
    });
    $("#serviceslider").owlCarousel({
		loop:true,
        navigation : true,
        smartSpeed:1000,
	    autoplayTimeout:2700,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        640:{
	            items:2,
	        }
	    }
    });
    $("#newslider").owlCarousel({
		loop:true,
        navigation : true,
        smartSpeed:1000,
	    autoplayTimeout:2700,
	    responsiveClass:true,
	    responsive:{
	        0:{
	            items:1,
	        },
	        640:{
	            items:2,
	        },
	        992:{
	            items:4,
	        }
	    }
    });
});
