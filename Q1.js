let jsonObject = {
    "name": "John",
    "age": 30,
    "city": "New York"
};

// for loop
console.log("Using for loop");
let keys = Object.keys(jsonObject);
for (let i = 0; i < keys.length; i++) {
    console.log(keys[i] + ": " + jsonObject[keys[i]]);
}; 

// for...in loop
console.log("Using for...in loop");
for (let key in jsonObject) {
    if (jsonObject.hasOwnProperty(key)) {
        console.log(key + ": " + jsonObject[key]);
    }
}

// for...of loop
console.log("Using for...of loop");
keys = Object.keys(jsonObject);
for (let key of keys) {
    console.log(key + ": " + jsonObject[key]);
}

// forEach loop
console.log("Using forEach loop");
keys.forEach(key => {
    console.log(key + ": " + jsonObject[key]);
});
