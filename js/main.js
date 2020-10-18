// Tạo menu cố định khi cuộn : start

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("fixed-top")
	} else {
		navbar.classList.remove("fixed-top");
	}
}
// Tạo menu cố định khi cuộn : end


// owl-carousel-category : start
$('.owl-category').owlCarousel({
	loop:true,
	margin:10,
	dots:false,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:true
		},
		600:{
			items:3,
			nav:true
		},
		1000:{
			items:5,
			nav:false,
			loop:false
		}
	}
})
// owl-carousel-category : end

// owl-carousel-bathroom : start
$('.owl-bathroom').owlCarousel({
	autoplay: true,
	center: true,
	loop: true,
	nav: true,
})
// owl-carousel-bathroom : end
// 
//  owl-product-releated : start
$('.owl-product-releated').owlCarousel({
	loop:true,
	margin:10,
	responsiveClass:true,
	responsive:{
		0:{
			items:1,
			nav:false
		},
		600:{
			items:3,
			nav:false
		},
		1000:{
			items:5,
			nav:true,
			loop:false
		}
	}
})
//  owl-product-releated : end
