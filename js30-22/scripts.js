// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight)
function highlightLink (){
	const linkCoords = this.getBoundingClientRect()
	const coords = {
		width: linkCoords.width,
		height: linkCoords.height,
		top: linkCoords.top + window.scrollY,//adjusts for the vertical scroll
		left: linkCoords.left + window.scrollX//adjusts for horizontal scroll, if any (NEVER have horizontal scroll!)
	}
	highlight.style.width = `${coords.width}px`
	highlight.style.height = `${coords.height}px`
	highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}
triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))