const body = document.querySelector('body')
const links = document.getElementsByTagName('a')
const button = document.getElementsByTagName('button')
const cursor = document.querySelector('#cursor')
const follower = document.querySelector('#aura')
const sliderDirection = document.querySelector('.works__slider')

	cx = window.innerWidth / 2,
	cy = window.innerHeight / 2

body.addEventListener('mousemove', e => {

	clientX = e.pageX
	clientY = e.pageY

	mouseCoords(e)
	cursor.classList.remove('hidden')
	follower.classList.remove('hidden')

	for(let i = 0; i < links.length; i++) {
		links[i].addEventListener('mouseover', () => {
			cursor.classList.add('active')
			follower.classList.add('active-link')
		})
		links[i].addEventListener('mouseout', () => {
			cursor.classList.remove('active')
			follower.classList.remove('active-link')
		})
	}
	for(let i = 0; i < button.length; i++) {
		button[i].addEventListener('mouseover', () => {
			cursor.classList.add('active')
			follower.classList.add('active-btn')
		})
		button[i].addEventListener('mouseout', () => {
			cursor.classList.remove('active')
			follower.classList.remove('active-btn')
		})
	}
})

body.addEventListener('mouseout', () => {
	cursor.classList.add('hidden')
	follower.classList.add('hidden')
})

if (sliderDirection) {
	sliderDirection.addEventListener('mousedown', () => {
		cursor.classList.add('hold')
		follower.classList.add('hold')
	})
	body.addEventListener('mouseup', () => {
		cursor.classList.remove('hold')
		follower.classList.remove('hold')
	})
}

mouseX = 0, mouseY = 0, posX = 0, posY = 0

function mouseCoords(e){
	mouseX = e.pageX
	mouseY = e.pageY
}
gsap.to({}, .01, {
	repeat: -1,
	onRepeat: () => {
		posX += (mouseX - posX) / 5
		posY += (mouseY - posY) / 5

		gsap.set(cursor, {
			css:{
				left: mouseX,
				top: mouseY
			}
		})
		gsap.set(follower, {
			css:{
				left: posX - 23,
				top: posY - 23
			}
		})
	}
})