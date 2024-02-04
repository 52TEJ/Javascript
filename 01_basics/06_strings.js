const name = "tejz"
const repoCount = 50

// console.log(name + repoCount + " Value"); // can't use it in today's scenario

console.log(`Hello! my name is ${name} and my repo count is ${repoCount}`); // modern way for syntax (string interpolation)

const gameName = new String('tej-jz-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());

// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 3)
console.log(newString);

const newString1 = gameName.slice(-8, 3)
console.log(newString1);

const newString2 = "    tejz    "
console.log(newString2);
console.log(newString2.trim());

const url = "https://tejz.com/tejz%20prakashh"

console.log(url.replace('%20', '_'))

console.log(url.includes('akash'))

console.log(gameName.split('-'));