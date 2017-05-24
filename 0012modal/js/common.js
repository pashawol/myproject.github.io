$(function() {

	
function sliders(){ 
 $('.otz-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  // arrows: false, 
  asNavFor: '.slider-nav',
  dots: false,
  prevArrow: ' <div class="l"></div>',
  nextArrow: '   <div class="r"></div> ',
  adaptiveHeight: true,

  // draggable: false 

});
$('.slider-nav').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  asNavFor: '.otz-slider',
  dots: false,  
  // centerMode: true,
  focusOnSelect: true,
  // vertical: false,
  arrows: false,
  
  // draggable: false 

  responsive: [
	    {
	      breakpoint:992,
	      settings: {
	        slidesToShow: 4,
	        
	      }
	    },
	    
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 3,
	       
	      }
	    }
	   
	  ]
});
}
sliders();

$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});
	$('.popup-with-zoom-anim').click(function(){
		 $('.otz-slider').slick('unslick');
		 $('.slider-nav').slick('unslick');
		sliders();
	})
 

 // скроллбар
  $(".modal-gall .text-wrap").mCustomScrollbar({
 	scrollbarPosition: "inside",
 	theme: "dark-thick"
 });
});
