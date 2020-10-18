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

// Zoom ảnh sản phẩm
$(function(){
	$('#zoom1').bind('click',function(){
		var cloudZoom = $(this).data('CloudZoom'); 
		cloudZoom.closeZoom();
		$.fancybox.open(cloudZoom.getGalleryList());
		return false;
	});
});

CloudZoom.quickStart(); // cz
// Zoom ảnh sản phẩm
// 

// click tăng số lượng sản phẩm

//plugin bootstrap minus and plus
    $(document).ready(function() {
    $('.btn-number').click(function(e){
    e.preventDefault();
    var fieldName = $(this).attr('data-field');
    var type = $(this).attr('data-type');
    var input = $("input[name='" + fieldName + "']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
    if (type == 'minus') {
    var minValue = parseInt(input.attr('min'));
    if (!minValue) minValue = 1;
    if (currentVal > minValue) {
    input.val(currentVal - 1).change();
    }
    if (parseInt(input.val()) == minValue) {
    $(this).attr('disabled', true);
    }

    } else if (type == 'plus') {
    var maxValue = parseInt(input.attr('max'));
    if (!maxValue) maxValue = 999;
    if (currentVal < maxValue) {
    input.val(currentVal + 1).change();
    }
    if (parseInt(input.val()) == maxValue) {
    $(this).attr('disabled', true);
    }

    }
    } else {
    input.val(0);
    }
    });
    $('.input-number').focusin(function(){
    $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {

    var minValue = parseInt($(this).attr('min'));
    var maxValue = parseInt($(this).attr('max'));
    if (!minValue) minValue = 1;
    if (!maxValue) maxValue = 999;
    var valueCurrent = parseInt($(this).val());
    var name = $(this).attr('name');
    if (valueCurrent >= minValue) {
    $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
    alert('Sorry, the minimum value was reached');
    $(this).val($(this).data('oldValue'));
    }
    if (valueCurrent <= maxValue) {
    $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
    } else {
    alert('Sorry, the maximum value was reached');
    $(this).val($(this).data('oldValue'));
    }
    });
    $(".input-number").keydown(function (e) {
    // Allow: backspace, delete, tab, escape, enter and .
    if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== - 1 ||
            // Allow: Ctrl+A
                    (e.keyCode == 65 && e.ctrlKey === true) ||
                    // Allow: home, end, left, right
                            (e.keyCode >= 35 && e.keyCode <= 39)) {
            // let it happen, don't do anything
            return;
            }
            // Ensure that it is a number and stop the keypress
            if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
            }
            });
    });