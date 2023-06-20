function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John Smith", 33);
var another_person = {};

Person.call(another_person, "Another Person", 25);//因为 JavaScript 中的对象不具有 prototype 属性。只有函数具有 prototype 属性
/*
将 another_person 对象作为上下文传递给 Person() 函数，并使用传递的参数来设置其属性 name 和 age。这就是使用函数来初始化对象的方式。
*/
// console.log(john.getName()); // 正确的输出为 "John Smith"
// console.log(another_person.getName()); // 错误的输出，another_person 对象没有 getName() 方法
// console.log(another_person.name); // 正确的输出为 "Another Person"
// console.log(another_person.age); // 正确的输出为 25




