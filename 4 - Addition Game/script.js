var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
const check = document.getElementById('button');
var input = document.getElementById('input');


function ranGenerator(){

	num1.innerHTML = parseInt(Math.random()*10);
	num2.innerHTML = parseInt(Math.random()*10);

}

ranGenerator();


check.addEventListener('click', function ()
{
	// getting the user input
	var theInput = parseInt(input.value);
	
	// calculating the actual answer
	var answer = parseInt ( num1.innerHTML) + parseInt(num2.innerHTML);


	if (input.value == "")
	{
		alert("Enter a value to check!")
		return;
	}

	if(theInput == answer)
	{
		alert('Your answer is correct. Good Job!')
		ranGenerator();
		input.value = ''
	}
	else{
		alert("Sorry your answer is incoreect. Please try again!")
		ranGenerator();
		input.value = ''
	}
});

