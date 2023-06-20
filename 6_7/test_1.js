// var Animal = function (name, age) {
//     this.name = name;
//     this.age = age;
// };

// Animal.prototype.say = function () {
//     console.log("name is ", this.name, "age is ", this.age);
// }

// var Dog = function (name, age, bread) {
//     Animal.call(this, name, age);
//     this.bread = bread;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;

// console.log(Dog.prototype.constructor);// [Function: Dog]

// Dog.prototype.bark = function () {
//     console.log(this.breed + " is barking.");
// };


function ToString(str) {
    var result = str || "undefind";
    if (typeof str === "string") {
        String.prototype.to_string = function () {
            result = "come in " + str;
            return result;
        }
    }
    return result;
}

console.log(ToString("测试").to_string());