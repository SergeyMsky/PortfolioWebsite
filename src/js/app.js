@@include('slick.min.js')
@@include('anime.min.js')
@@include('preloader.js')
@@include('cursor.js')
@@include('slider.js')

const moveText = document.querySelector('.title__container, .title-column')
const moveNumber = document.querySelector('.works__progress-number')

window.addEventListener('mousemove', function(e) {
	let x = e.clientX / window.innerWidth
	let y = e.clientY / window.innerHeight
	if (moveNumber && (window.matchMedia("(min-width: 1023px)").matches)) {
		moveNumber.style.transform = 'translate(-' + x * 15 + 'px, -' + y * 15 + 'px)'
	}
	if (window.matchMedia("(min-width: 1023px)").matches) {
		moveText.style.transform = 'translate(' + x * 10 + 'px, ' + y * 10 + 'px)'
	}
})


const menuItm = document.querySelectorAll('.menu__itm')
const mainTitleText = document.querySelector('.title__container')
const nameWork = document.querySelector('.works__name--text')

if(!preloader.classList.contains('done')){
	setTimeout( () => {
		setTimeout( () => {
			anime({
				targets: '.box-text__itm span',
				translateX: anime.stagger(100, {grid: [24, 5], from: 'center', axis: 'x'}),
				translateY: anime.stagger(100, {grid: [24, 5], from: 'center', axis: 'y'}),
				rotateZ: anime.stagger([0, 10], {grid: [14, 5], from: 'center', axis: 'x'}),
				delay: anime.stagger(200, {grid: [14, 5], from: 'center'}),
				easing: 'easeInOutQuad', direction: 'reverse', scale: 0.5, opacity: 0,});
			anime({targets: '.title__container', opacity: 1,});
		}, 900)
		anime({targets: '.title-column span', translateX: 180, delay: anime.stagger(100),});
		anime({targets: '.works__progress-number span', translateY: 700, delay: anime.stagger(100), easing: 'easeInOutQuad',});
		anime({targets: '.slider__itm', translateX: 20, delay: anime.stagger(200), easing: 'easeInOutQuad', opacity: 1,});
		anime({targets: '.slick-dots button', translateY: -170, delay: anime.stagger(100, {start: 650}), opacity: 1,});
		anime({targets: '.home .footer__contacts span', translateY: [200, 0], delay: anime.stagger(30), rotate: 360,});
		anime({targets: '.photo__overlay', translateY: 1100, delay: 0, duration: 1000, easing: 'easeInSine'});
		anime({targets: '.photo', opacity: 0.8, delay: 500, duration: 900, easing: 'easeInSine'});
		anime({targets: '.about__overlay', translateX: 1100, delay: 0, duration: 1000, easing: 'easeInSine'});
		anime({targets: '.content-about', translateX: 0, opacity: 1, delay: 600, duration: 200, easing: 'easeInSine'});

		menuItm.forEach(element => {element.style.opacity = '1'})
		if (nameWork){ nameWork.style.opacity = '1' }
	}, 1700)
}