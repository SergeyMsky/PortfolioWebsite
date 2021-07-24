let images = document.images,
	imagesTotalCount = images.length,
	imagesLoadedCount = 0,
	preloader = document.querySelector('#page-preloader'),
	percDisplay = document.querySelector('#perc-load')

for( let i = 0; i < imagesTotalCount; i++ ) {
	imageClone = new Image();
	imageClone.onload = imageLoaded;
	imageClone.onerror = imageLoaded;
	imageClone.src = images[i].src;
}

function imageLoaded() {
	imagesLoadedCount++;
	percDisplay.innerHTML = (( (100 / imagesTotalCount ) * imagesLoadedCount) << 0) + '%';
	
	if(imagesLoadedCount >= imagesTotalCount) {
		setTimeout(function (){
			if (!preloader.classList.contains('done')) {
				preloader.classList.add('done')
				setTimeout(function (){
					p1.remove()
					p2.remove()
				}, 2000);
			}
		}, 500);
	}
}

if (imagesTotalCount <= 0) {
	percDisplay.innerHTML = '100' + '%';
	setTimeout(function (){
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done')
			setTimeout(function (){
				p1.remove()
				p2.remove()
			}, 2000);
		}
	}, 500);
}

const p1 = document.querySelector('.preloader__itm--shape-1')
const p2 = document.querySelector('.preloader__itm--shape-2')

anime({targets: p1, 
	translateX: [-40, 40], loop: true, direction: 'alternate', easing: 'easeInOutQuad', 
	backgroundColor: 'rgb(244,67,54)', duration: 900,});
anime({targets: p2, 
	translateX: [40, -40], loop: true, direction: 'alternate', easing: 'easeInOutQuad', 
	backgroundColor: 'rgb(33,150,243)', duration: 900,});


