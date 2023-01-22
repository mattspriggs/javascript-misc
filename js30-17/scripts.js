

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(bandName){
	return bandName.replace(/^(a |the |an )/i, '').trim()//this does not alter the data when used in the if below
}

const sortedBands = bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
// (function (a, b){
// if(strip(a) > strip(b)){//does not alter the actual data, only the comparison for the sort
//   return 1
// }else{
//   return -1
// }
//})

document.querySelector('#bands').innerHTML =
	sortedBands
		.map(band => `<li>${band}</li>`)
		.join('')//use the join to remove the comma.  Without the .join it will print the comma between each list item
