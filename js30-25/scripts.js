const divs = document.querySelectorAll('div')

function logText(e){
	console.log(this.classList.value)//when you click on a div it will console log all the parents of that element which is bubbling
//When you click on an element it starts at the outermost element with a capture until it reaches the element with the listener and bubbles the click up to the beginning, which in this case is the body
}


divs.forEach(div => div.addEventListener('click', logText))