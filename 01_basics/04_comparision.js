// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// ************* This type of conversions we have to avoid all the time. ***************

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

/*  **The reason is that an equality check == and comparisions >, <, >=, <= work differently.
    Comparisions convert null to a number, treating it as 0.
    That's why (3) null >= 0 is *true & (1) null > 0 is *false   */

    // console.log(undefined > 0);
    // console.log(undefined == 0);
    // console.log(undefined >= 0);

// ************* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX ***************    

    // ===

    console.log("2" ===2);