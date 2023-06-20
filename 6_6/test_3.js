// function Gizmo(id) {
//     this.id = id
// }
// Gizmo.prototype.toString = function () {
//     return "gizmo" + this.id
// }

// var g = new Gizmo(5);
// /*
// 如果一个构造函数中没有使用 return 语句显式地返回一个对象，则构造函数会返回一个新创建的对象实例，并将这个实例绑定到调用 new 操作符时传递的变量上。

// var g = {};  // 创建一个新的空对象
// g.__proto__ = Gizmo.prototype;  // 将该对象的原型设置为 Gizmo.prototype
// var result = Gizmo.call(g, 5);  // 在该对象上调用 Gizmo 函数，设置该对象的属性
// if (typeof result === "object") {  // 如果 Gizmo 函数显式返回一个对象，则使用该对象作为返回值
//   g = result;
// }
// 在这个过程中，g 对象实际上就是 Gizmo 构造函数隐式返回的对象实例。因此，在 g 对象上可以访问 Gizmo.prototype 中的方法和属性。
// */
// function Hoozit(id) {
//     this.id = id;
// }
// Hoozit.prototype = new Gizmo();
// Hoozit.prototype.test = function (id) {
//     return this.id === id;
// }
// var h = new Hoozit(5);
// console.log("Hoozit 1 is", h.test());
// console.log("Hoozit 2 is", h.toString());



function new_constructor(parent, constructor, properties) {
    // 创建一个新对象，将其原型指向 parent
    var obj = Object.create(parent.prototype);

    // 使用 constructor 函数初始化 obj 对象
    constructor.apply(obj, Array.prototype.slice.call(arguments, 3));

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

var gizmo = new_constructor(Object, function (id) {
    this.id = id;
}, {
    toString: function () {
        return "gizmo" + this.id;
    }
});

var hoozit = new_constructor(gizmo, function (id) {
    this.id = id;
}, {
    toString: function () {
        return this.id === id;
    }
});
console.log(gizmo.toString()); // 输出 "gizmoundefined"
console.log(hoozit.toString()); // 输出 "false"
console.log(hoozit.id); // 输出输入的参数值