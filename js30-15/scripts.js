const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

function addItem(e){
	e.preventDefault()
	const text = (this.querySelector('[name=item]')).value//this = form element, so it will look for the entry with name on the form
	const item ={
		text,
		done: false
	}
	items.push(item)
	populateList(items, itemsList)
	localStorage.setItem('items', JSON.stringify(items))
	this.reset()//will clear the entry on the form
}

function populateList(plates = [], platesList){
	platesList.innerHTML = plates.map((plate, i) =>{
		return `
      <li>
        <input type="checkbox" data-index = ${i} id = "item${i}" ${plate.done ? 'checked' : ''}/>
        <label for = "item${i}">${plate.text}</label>
      </li>
    `
	}).join('')
}

function toggleDone(e){
	if(!e.target.matches('input')) return//skip this unless it is an input
	const el = e.target
	const index = el.dataset.index
	items[index].done = !items[index].done
	localStorage.setItem('items', JSON.stringify(items))
	populateList(items, itemsList)
}

addItems.addEventListener('submit', addItem)//submit events are broader that other events such as click
itemsList.addEventListener('click', toggleDone)
populateList(items, itemsList)
