var names = ["1", "2", "3", "4", "5", "6"]
var digit_name = function (n) {
    return names[n]
}
console.log(digit_name(3));

var digit_name2 = (function () {
    return function (n) {
        return names[n]
    }
}())
console.log(digit_name2(4));


var digit_name3 = (function () {
    var names = ["1", "2", "3", "4", "5", "6"];

    return function (n) {
        return names[n]
    }
}())
console.log(digit_name3(5));


// 定义和执行 IIFE
(function () {
    var a = 1;
    console.log(a);  // 输出 1

    var b = 2;
    console.log(b);  // 输出 2

    function doSomething(x, y) {
        return x + y;
    }

    var result = doSomething(a, b);
    /*
    IIFE 不仅可以返回一个值，还可以执行任意数量的代码，包括声明变量、定义函数、执行语句等等。但是在 IIFE 内部定义的变量和函数只能在函数内部使用，不会被暴露到全局作用域中，这也是 IIFE 的一个优点。
    */
    console.log(result);  // 输出 3
})();




function add(x, y) {
    var result = x + y;    // 定义并计算结果
    // 没有使用 return 语句
    return result
}

var sum = add(2, 3);    // 调用函数
console.log(sum);    // 输出 5
