const accountId = 144553
let accountEmail = "baizidikhan@gmail.com"
var accountPassword = "12345"
accountCity = "Punjab"
let accountState;

// accountId = 24   // not allowed
accountEmail = "er3@c.com"
accountPassword = "3254"
accountCity = "Mohali"
console.log(accountId);

/*
Prefer not to use "var"
Because of issue in block scope and functinal scop
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // Execute variable with index