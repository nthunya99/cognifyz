const button = document.getElementById('buttonColor');

const colors = ['green', 'blue', 'orange', 'red'];

let i = 0;

button.addEventListener ('click', () => {
    button.style.backgroundColor = colors[i];

    i = (i + 1)% colors.length;
});

const button1 = document.getElementById('alertBtn');

button1.addEventListener('click', () => {

        var currentHour = new Date().getHours();
        var greetings;
    
        if (currentHour >= 5 && currentHour < 12){
            greetings = "Good Morning";
        } else if (currentHour >= 12 && currentHour < 17){
            greetings = "Good afternoon";
        } 
        else if (currentHour >= 17 && currentHour < 21){
            greetings = "Good evening";
        }
        else {
            greetings = "Good night";
        }

        alert(greetings);

        
});


function addNum() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter a valid number');
        return;
    }

    var sum = num1 + num2;

    document.getElementById('results').innerHTML = "Results: " + sum;
}
