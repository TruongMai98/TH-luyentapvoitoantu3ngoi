/*
let message;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}
 */
let login = prompt('Enter:');
let message = (login == 'Employee')? 'hello':
    (login == 'Director')? 'greetings': 'no login';

alert(message);