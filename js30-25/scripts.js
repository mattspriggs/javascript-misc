const divs = document.querySelectorAll('div')
const button = document.querySelector('button')
function logText(e){
	console.log(this.classList.value)//when you click on a div it will console log all the parents of that element which is bubbling
//When you click on an element it starts at the outermost element with a capture until it reaches the element with the listener and bubbles the click up to the beginning, which in this case is the body
	e.stopPropagation()//prevents the bubble up effect and captures on the single intended event
}

divs.forEach(div => div.addEventListener('click', logText,
	// {capture: true}
	{capture: false,
		once: true//allows only single click and will bubble up on successive clicks with stop propagation and will fire all once with propagation
	}))
//With the {capture: true} option it will cause the event to fire on the way down, not when it bubbles up - by default it is false

button.addEventListener('click', () =>{
	console.log('CLICK!!!!!!')
}, {
	once: true//can only click the button once on the page - could be helpful to ensure that the user doesn't commit multiple actions and allow for things to process
})
