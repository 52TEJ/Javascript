// IIFE - Immediately Invoked Function Expressions - Global scope ke pollution se problem hoti hai kyi bar to us global scope ke variable ya jo bhi oha declaration hai uske pollution ko hatane ke liye hmne iife ka use kiya. 

(function chai (){
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Tejz')
