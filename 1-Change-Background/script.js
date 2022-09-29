const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
var box1 = document.getElementById('bx')
var button = document.getElementById('btn')



button.addEventListener('click', changeBackground);


function changeBackground() 
{
    const colorIndex= parseInt(Math.random()*colors.length)
    box1.style.background = colors[colorIndex]
    box1.innerHTML = colors[colorIndex]
}