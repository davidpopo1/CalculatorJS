const inputValue = document.getElementById('userinput');

const calculate = document
.querySelectorAll('.operations')
.forEach(function(item) {
    
    item.addEventListener('click', function(e) {
            let lastValue = inputValue.innerText.substring(
            inputValue.innerText.length,
            inputValue.innerText.length - 1
            );
            console.log(lastValue);
        if(!isNaN(lastValue) && e.target.innerText === '=') {
        inputValue.innerText = eval(inputValue.innerText);
        }else if(e.target.innerText === 'AC') {
            inputValue.innerText = '0';
        }else if(e.target.innerText === 'DEL') {
            inputValue.innerText = inputValue.innerText.substring(
            0,
            inputValue.innerText.length - 1,
            // Removes the last character from the inputValue
        );
            if(inputValue.innerText.length == 0) {
            inputValue.innerText = '0';
            // If the inputValue is empty, set it to '0'
        }
        }else {
        if(!isNaN(lastValue)) {
            inputValue.innerText += e.target.innerText;
            
        }//Does not let you input an operator if the last value is not a number
        }
    });
});

const number = document.querySelectorAll('.numbers').forEach(function(item) {
    item.addEventListener('click', function(e) {
        if(inputValue.innerText === '0') {
            inputValue.innerText = '';
        }
        inputValue.innerText += e.target.innerText.trim();
        // Gets the value of the clicked button w/ class 'numbers'
        // and sets it to the inputValue element
        // This will replace the current input value with the clicked number
    });
});