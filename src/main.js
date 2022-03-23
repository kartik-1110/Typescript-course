// to run this code paste the code in main.ts
// creating objects
var user = {
    name: "Alex",
    age: 24,
    getMessage: function () {
        return "Hello" + name;
    }
};
var user2 = {
    name: "John",
    getMessage: function () {
        return "Hello" + name;
    }
};
console.log(user.getMessage());
