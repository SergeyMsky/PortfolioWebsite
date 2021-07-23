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
			}
		}, 500);
	}
}

if (imagesTotalCount <= 0) {
	percDisplay.innerHTML = '100' + '%';
	setTimeout(function (){
		if (!preloader.classList.contains('done')) {
			preloader.classList.add('done')
		}
	}, 500);
}
