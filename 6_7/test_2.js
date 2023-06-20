function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function () {
    console.log('Hi, I am ' + this.name);
}

var p1 = new Person('Tom', 18);

/*
可以这么理解：

- 当使用 `new Person()` 调用构造函数时，JavaScript 引擎会创建一个新的空对象，同时将这个空对象的原型链指向构造函数的 `prototype` 属性所指向的对象。
- 构造函数内部的 `this` 关键字指向的是新创建的空对象。
- 原型对象中的 `constructor` 属性指向的是构造函数本身，也就是 `Person`。
- 因此，通过原型链，新创建的空对象可以访问原型对象中的方法和属性，比如通过 `p1.sayHi()` 调用 `Person.prototype` 中的 `sayHi` 方法。

在这个过程中，构造函数、原型对象、实例对象之间的关系如下：

- 构造函数 `Person` 创建了一个 `prototype` 属性所指向的原型对象，该原型对象中包含方法和属性。
- 实例对象 `p1` 通过原型链继承了原型对象中的方法和属性。
- 原型对象中的 `constructor` 属性指向构造函数 `Person` 本身，这样可以方便地通过原型链找到构造函数。

总的来说，构造函数、原型对象和实例对象是 JavaScript 中面向对象编程的三个基本概念。通过构造函数和原型对象的结合使用，可以实现对象的属性共享和方法共享，从而实现代码的重用和扩展。
*/