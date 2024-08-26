/*
Write the code which asks for a login with prompt.

If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

The password is checked as follows:

If it equals “TheMaster”, then show “Welcome!”,
Another string – show “Wrong password”,
For an empty string or cancelled input, show “Canceled”
*/

const prompt = require('prompt-sync')();

let login = prompt('Enter user name');
if (login === 'Admin') {
    let password = prompt('Enter your password');
    if (password === 'TheMaster') {
        console.log('Welcome!');
    } else if (password === '' || password === null) {
        console.log('“Canceled”');
    } else {
        console.log('“Wrong password”');
    }
} else if (login === '' || login === null) {
    console.log('“Canceled”');
} else {
    console.log('“I don’t know you”');
}