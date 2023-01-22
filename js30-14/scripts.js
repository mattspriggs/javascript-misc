// start with strings, numbers and booleans

let age = 100
let age2 = age
console.log(age, age2)
age = 200
console.log(age, age2)

let name = 'Wes'
let name2 = name
console.log(name, name2)
name = 'Wesley'
console.log(name, name2)

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

// and we want to make a copy of it.

const team = players
console.log(team)

// You might think we can just do something like this:
team[3] = 'Lux'//In this case it will update the original array of players as well as the new array of team
//team is ONLY a reference to the original array

// however what happens when we update that array?

// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!
const team2 = players.slice()//slice, with no parameters, makes a copy.  So you can change team2 without effecting players array



// one way

// or create a new array and concat the old one in

//OR
const team3 = [].concat(players)

// or use the new ES6 Spread
const team4 = [...players]

const team5 = Array.from(team4)

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
	name: 'Wes Bos',
	age: 80
};

// and think we make a copy:
const captain = person
captain.number = 99//adds the number to the object, does not update
captain.age = 99

// how do we take a copy instead?

const cap2 = Object.assign({}, person, {number: 199})
console.log(cap2)

// We will hopefully soon see the object ...spread

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
	name: 'Wes',
	age: 29,
	social:{
		twitter: '@wesbos',
		facebook: 'wesbos.developer'
	}
}
console.clear()
console.log(wes)

//To make a copy of the object
const dev = Object.assign({}, wes)//When this updates it will not change the original
//if you go one more level deep of an object it will not prevent changes to the original object
