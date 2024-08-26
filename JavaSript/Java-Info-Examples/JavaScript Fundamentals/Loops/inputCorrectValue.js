/*
Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask them to input again.

The loop must ask for a number until either the visitor enters a number greater than 100 or cancels the input/enters an empty line.
*/

const prompt = require('prompt-sync')();

let askNum;
do{
    askNum = prompt('Enter Number greater than 100'); 
} while(askNum <= 100 && askNum);


/*
The loop do..while repeats while both checks are truthy:

The check for num <= 100 – that is, the entered value is still not greater than 100.
The check && num is false when num is null or an empty string. Then the while loop stops too.
P.S. If num is null then num <= 100 is true, so without the 2nd check the loop wouldn’t stop if the user clicks CANCEL. Both checks are required.
*/