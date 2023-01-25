const triggers  = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter(){
	this.classList.add('trigger-enter')
	//setTimeout(function(){ ... }//this will be undefined in a normal function
	setTimeout(() => this.classList.add('trigger-enter-active'), 150)//in an arrow function it inherits this from the parent
	background.classList.add('open')
	const dropdown = this.querySelector('.dropdown')
	const dropdownCoords = dropdown.getBoundingClientRect()
	const navCoords = nav.getBoundingClientRect()
	const coords = {
		height: dropdownCoords.height,
		width: dropdownCoords.width
	}
	background.style.setProperty('width', coords.width)
	background.style.setProperty('height', coords.height)
}

function handleLeave(){
	this.classList.remove('trigger-enter', 'trigger-enter-active')
	background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))