const triggers  = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter(){
	this.classList.add('trigger-enter')
	//setTimeout(function(){ ... }//this will be undefined in a normal function
	setTimeout(() => this.classList.add('trigger-enter-active'), 150)//in an arrow function it inherits this from the parent
}

function handleLeave(){
	console.log('LEAVE!!!!!!!!!!!!!')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))