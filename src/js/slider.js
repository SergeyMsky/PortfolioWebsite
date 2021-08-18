const $slider = $('.works__slider')
const sliderCounter = document.querySelector('.slider-counter')
const scrollCount = null;
const scroll= null;
let newText

$(document).ready(function(){
	if ($slider.length){
		$('.works__slider').slick({
			arrows: false,
			dots: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: false,
			touchThreshold: 100,
			variableWidth: true,
			speed: 1500,
			responsive: [
		    {
		      breakpoint: 530,
		      	settings: {
		        variableWidth: false,
		        speed: 300,
		        touchThreshold: 5,
		      }
		    }
		  ]
		})
	}
})

if ($slider.length) {
	let updateSliderCounter = function(slick, currentIndex) {
    	currentSlide = slick.slickCurrentSlide() + 1
    	$(sliderCounter).text(currentSlide)
    	nextSlide = newText
    	if (currentSlide === 1) {
			$(nameWork).text(nextSlide = 'Cryptocurrency')
		} else if (currentSlide === 2) {
			$(nameWork).text(nextSlide = 'Barbershop')
		} else {
			$(nameWork).text(nextSlide = 'Papershop')
		}
  	}
  	$slider.on('afterChange', function(event, slick, currentSlide) {
    	updateSliderCounter(slick, currentSlide)
  	})
  	$slider.on('wheel', function(e) {
	 	e.preventDefault()
	  	if (e.originalEvent.deltaY > 0) {
	    	$(this).slick('slickNext');
	  	} else {
	    	$(this).slick('slickPrev');
	  	}
	})
}

