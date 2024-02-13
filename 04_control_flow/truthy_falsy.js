const userEmail = "T@tejz.ai"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Did't got any email");
}

// ++++++++++++++++++++++++++++++++++++++ NOTE ++++++++++++++++++++++++++++++++++++++++

// falsy values

// false, 0, -0, Bigint - (0n), "", null, undefined, NaN

// truthy values

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object id empty");
}

// 39:00