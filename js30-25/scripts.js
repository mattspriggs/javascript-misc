const divs = document.querySelectorAll('div')

function logText(e){
	console.log(this.classList.value)//when you click on a div it will console log all the parents of that element which is bubbling
//When you click on an element it starts at the outermost element with a capture until it reaches the element with the listener and bubbles the click up to the beginning, which in this case is the body
	e.stopPropagation()//prevents the bubble up effect and captures on the single intended event
}

divs.forEach(div => div.addEventListener('click', logText,
	// {capture: true}
	{capture: false}
))
//With the {capture: true} option it will cause the event to fire on the way down, not when it bubbles up - by default it is false
