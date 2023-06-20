var add = function (a, b) {
    return a + b
}

// var myObject = {
//     value: 0,
//     increment: function (inc) {
//         this.value += typeof inc === "number" ? inc : 1
//         // 当调用 increment() 方法时，没有传递参数或者传递的参数不是数字类型时，value 属性会自增1。因此，以下两种情况都会使 value 属性等于1：
//         // 调用 myObject.increment() 方法时，没有传递任何参数。
//         // 调用 myObject.increment("string") 方法时，传递的参数不是一个数字。
//     }
// }
// myObject.increment();
// console.log(myObject.value);

// myObject.increment("string");
// console.log(myObject.value);


var Quo = function (string) {
    this.status = string
}
// var status = "moduel_text"

Quo.prototype.get_status = function () {
    // 箭头函数 () => {} 用于定义 get_status() 方法，它是一个箭头函数而不是普通函数。箭头函数与普通函数不同之处在于，箭头函数没有自己的 this，它会继承父级作用域的 this 值
    // return status返回 moduel_text
    return this.status
}

var myQuo = new Quo("TestText")
// console.log(myQuo.get_status());



var array = [3, 4]
var sum = add.apply(null, array)//接受 绑定this的值 参数数组

var statusObject = {
    status: 'A-Soul'
}

var status = Quo.prototype.get_status.apply(statusObject);
// console.log(status);//'A-Soul'



var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i]
    }
    return sum
}

// console.log(sum(4, 8, 15, 16, 23, 42));





Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this
}

Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
    // return this//[Number: -3.3333333333333335]
})
// console.log((-10 / 3).integer());

String.method('trim', function () {
    return this.replace(/^\s+|\s+$/g, '');
})
// console.log('"' + " net  ".trim() + '"');




var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a
    }
    return factorial(i - 1, a * i)
}
console.log(factorial(4));