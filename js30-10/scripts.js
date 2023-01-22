const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')
let lastChecked

function handleCheck(e){
	let inBetween = false
	if(e.shiftKey && this.checked){//check if they have the shift key down and check that they are checking it
		checkboxes.forEach(checkbox => {//loop through each checkbox and look for the first and each until it reaches the last one checked - this is looking to see if the checkbox is the first to be checked
			if(checkbox === this || checkbox === lastChecked){//this = the one that is initially checked
				inBetween = !inBetween//this will not allow it to be true for the first checked or the last checked and turns if off when it gets to the last checked and only true between them
			}
			if(inBetween){
				checkbox.checked = true
			}

		})
	}
	lastChecked = this
}
checkboxes.forEach(checkbox =>
	checkbox.addEventListener('click', handleCheck))