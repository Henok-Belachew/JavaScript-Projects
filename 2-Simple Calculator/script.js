var allButtons = document.getElementsByClassName("btnD")
var result = document.getElementById('equal');
var btnClear = document.getElementById('clear');

var operation = [];


const main = document.getElementById('main');
const errMsg = document.getElementById('error')
let displayResult;

console.log(main)



// function that clear the screen
function clear ()
{
	main.innerHTML = ''
	operand = [];
	operator = [];
	errMsg.style.color = "white"

}
btnClear.addEventListener('click',clear)


//function that display what clicked
function display()
{
	
	main.append(this.innerHTML)
	operation.push(this.innerHTML)
}

//adding the event listener to the buttons
for(var i = 0; i<allButtons.length; i++)
{
	allButtons[i].addEventListener('click',display);
}

//a function that do the maths
function calculate()
{
	// console.log(operation)
	var operand = ""

	for(var i = 0; i < operation.length; i++)
	{
		operand += operation[i];
	}
	// console.log(eval("'"+operand+"'"))
	console.log(eval(operand))
	//  eval(operand);
	// console.log(main.innerHTML)

	main.innerHTML = ''
	main.append(isplayResult)
}
result.addEventListener('click',calculate);
