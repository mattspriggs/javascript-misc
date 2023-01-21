const timeNodes = Array.from(document.querySelectorAll('[data-time]'))
const seconds = timeNodes
	.map(node => node.dataset.time)//grabbing the string of time
	.map(timeCode => {
		const [mins, secs] = timeCode.split(':')//split on seconds and minutes
			.map(parseFloat)//parse the strings into numbers
		return (mins * 60) + secs//gives the full amount of time in seconds total
	})
	.reduce((total, vidSeconds) => total + vidSeconds)//takes the array of minutes and seconds and reduces it to the total in seconds
let secondsLeft = seconds//Needs to be let in order to reassign values
const hours = Math.floor(secondsLeft / 3600)//floor will give the highest whole number for the hours
secondsLeft = secondsLeft % 3600
const minutes = Math.floor(secondsLeft / 60)//floor will give the highest whole number for the minutes
secondsLeft = secondsLeft % 60
console.log(hours, minutes, secondsLeft)//include the secondsLeft as no further conversion needed since seconds is the smallest amount of time relevant
