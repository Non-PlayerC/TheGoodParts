function new_constructor(parent, constructor, properties) {
    // 创建一个新对象，将其原型指向 parent
    var obj = Object.create(parent.prototype);

    // 使用 constructor 函数初始化 obj 对象
    constructor.call(obj);//这相当于调用 new 关键字时创建对象

    // 将 properties 对象中的属性和方法添加到 obj 上
    if (typeof properties === 'object') {
        for (var prop in properties) {
            if (properties.hasOwnProperty(prop)) {
                obj[prop] = properties[prop];
            }
        }
    }

    // 返回新对象
    return obj;
}
/*
这个函数是实现了“手写” JavaScript 中的 `new` 关键字中 `new Constructor()` 的功能，用于创建一个新的对象，并让它继承自 `parent` 的原型对象，并且使用 `constructor` 函数初始化这个对象，最后将 `properties` 对象中的属性和方法添加到这个新对象上，最终返回这个新对象。
可以分步解释上面这个函数的实现：
1. 首先，使用 `Object.create()` 方法创建一个新的对象 `obj`，并将其原型指向 `parent` 对象的原型。这样，新对象就能够继承 `parent` 对象原型的属性和方法。

   ```js
   var obj = Object.create(parent.prototype);
   ```

2. 接着，使用 `constructor` 函数来初始化 `obj` 对象，这相当于调用 `new` 关键字时创建对象时通过调用构造函数进行初始化的那部分操作。

   ```js
   constructor.call(obj);
   ```

3. 最后，将 `properties` 对象中的属性和方法添加到 `obj` 对象上。这里使用了 `for...in` 循环来遍历 `properties` 对象的属性，如果这个属性是 `properties` 对象自己的属性（而不是从原型链上继承来的），那么将其添加到 `obj` 对象上。

   ```js
   if (typeof properties === 'object') {
     for (var prop in properties) {
       if (properties.hasOwnProperty(prop)) {
         obj[prop] = properties[prop];
       }
     }
   }
   ```
4. 最终，将创建好的新对象 `obj` 返回。

   ```js
   return obj;
   ```

使用这个函数，我们可以将上面的 `Person` 构造函数重写为：

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.sayHello = function() {
  console.log(`Hello, my name is ${this.name}.`);
};

const john = new_constructor(Object, Person, {
  name: "John",
  age: 30
});

john.sayHello(); // 输出 "Hello, my name is John."
```
可以看到，这里的 `new_constructor()` 方法实现了 `new` 关键字的功能，用起来同样可以创建出一个 `Person` 对象实例，并且可以调用 `sayHello` 方法。
 */






















function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new_constructor(Person, function () {
    Person.call(this, "John Smith", 33);
}, { gender: "male" });
// 因此，通过传入 { gender: "male" } 这个对象，我们可以在创建对象时添加一些自定义属性和方法，以满足我们的需求。

var jane = new_constructor(Person, function () {
    Person.call(this, "Jane Doe", 27);
}, { gender: "female" });

console.log(john.getName()); // 正确的输出为 "John Smith"
console.log(john.age); // 正确的输出为 33
console.log(john.gender); // 正确的输出为 "male"

console.log(jane.getName()); // 正确的输出为 "Jane Doe"
console.log(jane.age); // 正确的输出为 27
console.log(jane.gender); // 正确的输出为 "female"
