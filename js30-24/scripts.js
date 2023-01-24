const nav = document.querySelector('#main')
const topOfNav = nav.offsetTop
function fixNav(){
	if(window.scrollY >= topOfNav){
		document.body.style.paddingTop = nav.offsetHeight + 'px'//prevents the nav from jumping when it is added to the doc
		document.body.classList.add('fixed-nav')
	}else{
		document.body.style.paddingTop = 0//keeps it from jumping from the top of nav up to fix
			document.body.classList.remove('fixed-nav')
	}
}

window.addEventListener('scroll', fixNav)