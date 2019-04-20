// Allow form to function

// Variable declaration
let addList = document.getElementById('add-list');
let listContainer = document.getElementById('items-list');

// Add event listeners
addList.addEventListener('click', addEvent); //calls function that adds the item to the list
listContainer.addEventListener('click', removeEvent); //calls function that removes item
listContainer.addEventListener('click', crossOff); //calls function that crosses off the item

function addEvent(e)
{
	e.preventDefault(); //values will appear in list - from jQuery library
	let displayList = document.createElement('li');
	let inputValue = document.getElementById('new-item').value;

	displayList.textContent = inputValue;
	displayList.className = 'list-group-item mb-2 w-75'; //bootstrap class

	let completeTask = document.createElement("img");
	completeTask.setAttribute('src', 'images/checkMark.png');
	completeTask.className = 'mr-2 img-margin btn btn-sm btn-info float-right'; //bootstrap button
	completeTask.style.height = '30px';

	let deleteTask = document.createElement('button');
	deleteTask.innerHTML = 'x';
	deleteTask.className = 'btn btn-sm btn-danger float-right mr-2'; //bootstrap button

	if(inputValue)
	{
		displayList.appendChild(completeTask);
		displayList.appendChild(deleteTask);
		listContainer.appendChild(displayList);
		addList.reset();
	}
}

// To delete list //
function removeEvent(e)
{
	if(e.target.classList.contains('btn-danger')) //bootstrap button
	{
		if (confirm('Are you sure?')) //window confirm method
		{
			let list = e.target.parentElement;
			listContainer.removeChild(list);
		}
	}
}

//To check off list //
function crossOff(e)
{
	if(e.target.classList.contains('img-margin'))
	{
		let list = e.target.parentElement;
		list.classList.toggle('cross');
	}
}