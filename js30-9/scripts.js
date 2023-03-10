const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
	const p = document.querySelector('p');
	p.style.color = '#BADA55';
	p.style.fontSize = '50px';
}
//To add a break point, rt click and select "break on" to set a break point for the debugger
// Regular
console.log('Hello')

// Interpolated
console.log('Hello I am a %s string!', 'whatever you want')
//does pretty much what `${whatever you pass to it}`

// Styled
console.log('%c I am some great text', 'font-size:50px; background:red; text-shadow: 10px 10px 0 blue')
//%c allows for you to add css styling to the console

// warning!
console.warn('OH NOOOOOO!')

// Error :|
console.error('Shit!')

// Info
console.info('Crocodiles eat 3-4 people a year')

// Testing
console.assert(1 === 1, 'That is wrong')//does not fire since it is true
console.assert(1 === 2, 'That is wrong')//not true so it fires
const p = document.querySelector('p')
console.assert(p.classList.contains('ouch'), 'That is wrong!')

// clearing
// console.clear() clears the console

// Viewing DOM Elements
console.log(p)
console.dir(p)

console.clear()
// Grouping together
dogs.forEach(dog => {
	console.group(`${dog.name}`)
	//OR console.groupCollapsed(`${dog.name}`) to have them collapsed when sent to the console
	console.log(`This is ${dog.name}`)
	console.log(`${dog.name} is ${dog.age} years old`)
	console.log(`${dog.name} is ${dog.age * 7} dog years old`)
	console.groupEnd(`${dog.name}`)
})

// counting
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Wes')
//tells you how many times it has been logged

// timing

console.time('fetching data')
fetch('https://api.github.com/users/mattspriggs')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching data')
		console.log(data)
	})

console.table(dogs)