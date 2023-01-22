function debounce(func, wait = 20, immediate = true) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide(e){
	sliderImages.forEach(sliderImage =>{
		const slideInAt = (window.scrollY + window.innerHeight)- sliderImage.height /2
		//gives the bottom of the view window; the set trigger at the 50% of the image height
		//bottom of the image
		const imageBottom = sliderImage.offsetTop + sliderImage.height
		const isHalfShown= slideInAt > sliderImage.offsetTop
		const isNotScrolledPast = window.scrollY < imageBottom
		if(isHalfShown && isNotScrolledPast){
			sliderImage.classList.add('active')
		}else{
			sliderImage.classList.remove('active')
		}
	})
}

window.addEventListener('scroll', debounce(checkSlide))//wrap in debounce to limit the number of times the function runs
