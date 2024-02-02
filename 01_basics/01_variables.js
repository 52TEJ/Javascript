const accountId = 1776654
let accountEmail = "52tejz@gmail.com"
var accountPassword = "12345"
accountCity = "Patna"  // can't suggest to use variable like this, but it will also run without throwing any error.
let accountState; // Undefined

// accountId = 2  // not allowed

accountEmail = "tz@tz.com"
accountPassword = "12222"
accountCity = "Bodhgaya"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
