// function gizmo(id) {
//     return {
//         toString: function () {
//             return "gizmo" + id;
//         }
//     }
// }

// function Hoozit(id) {
//     this.id = id
// }

// Hoozit.prototype = new Hoozit();
// Hoozit.prototype.test = function (id) {
//     return this.id === id
// }

// function hoozit(id) {
//     var that = gizmo(id);
//     that.test = function (testid) {
//         return testid === id;
//     }
//     return that;
// }

// var my_hoozit = hoozit("success"), test = my_hoozit.test;
// console.log(test("success"));



// e.returnValue = false;
// if (e.preventDefault) {
//     e.preventDefault();
// }
// return false;



// if (!Date.hasOwnProperty('now')) {
//     Date.now = function () {
//         return (new Date()).getTime();
//     }
// }
/*

这段代码的作用是为 Date 对象添加一个 now 方法，如果该方法已经存在则不进行任何操作。

首先，if (!Date.hasOwnProperty('now')) 判断了 Date 对象是否已经存在名为 now 的方法。hasOwnProperty() 方法用于检查对象本身是否包含指定属性或方法，如果包含则返回 true，否则返回 false。
因此，如果 Date 对象没有 now 方法，则执行以下代码块中的内容。

在代码块中，我们定义了一个匿名函数，并将其赋值给 Date 对象的 now 属性。这个匿名函数使用 new Date() 创建一个新的 Date 对象，并调用其 getTime() 方法获取当前时间的时间戳。
由于在 JavaScript 中，时间戳是一个整数值，表示自 1970 年 1 月 1 日 00:00:00 UTC 以来的毫秒数，因此 Date.now() 方法的返回值就是当前时间的时间戳。

这样，我们就为 Date 对象添加了一个可靠的方法来获取当前时间的时间戳，而无需考虑兼容性问题。如果浏览器中已经实现了 Date.now() 方法，则该方法不会被覆盖。
*/


// if (!Object.hasOwnProperty('keys')) {
//     Object.keys = function (object) {
//         var name, result = [];
//         for (name in object) {
//             if (Object.prototype.hasOwnProperty.call(object, name)) {
//                 //Object.prototype.hasOwnProperty() 方法用于判断一个对象是否包含指定的属性
//                 result.push(name);
//             }
//         }
//         return result;
//     }
// }
// const person = {
//     name: 'John',
//     age: 30,
//     gender: 'male',
//     occupation: 'programmer'
// };

// const keys = Object.keys(person);
// console.log(keys); // 输出 ["name", "age", "gender", "occupation"]




let product = {
    name: 'iPhone 12',
    price: 799,
    _discount: 0,

    // 定义 discount 属性，并设置 getter 和 setter 函数
    get discount() {
        return this._discount;
    },
    set discount(value) {
        if (value < 0 || value > 100) {
            throw new Error('Discount must be between 0 and 100');
        }
        this._discount = value;
    },

    // 定义计算折扣后价格的函数
    get discountedPrice() {
        return (1 - this.discount / 100) * this.price;
    }
};

// 给 product 对象添加一个新属性 inch，用于英寸和毫米单位的转换
Object.defineProperty(product, 'inch', {
    get: function () {
        return this._inch / 25.4;
    },
    set: function (value) {
        this._inch = value * 25.4;
    },
    configurable: false
    // configurable 属性被设置为 false，因此该属性不能被重新定义或删除，从而保护了该属性的安全性。
});

// 使用对象的属性和方法
console.log(product.name); // 输出 "iPhone 12"
product.discount = 10;
console.log(product.discount); // 输出 10
console.log(product.discountedPrice); // 输出 719.1
product.inch = 5; // 将 5 英寸转换为毫米
console.log(product.inch); // 输出 127
