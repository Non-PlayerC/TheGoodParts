var add = function (a, b) {
    return a + b
}

Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this
}

Function.method("curry", function () {
    var slice = Array.prototype.slice,
        // slice 方法被调用时，它通过 apply 方法将当前函数的 arguments 对象作为参数传递给了 slice 方法。
        // 由于 arguments 对象本身就是一个类数组对象，因此 slice 方法可以对其进行操作并返回一个新的数组，从而实现了将 arguments 对象转换为真正的数组的功能。
        args = slice.apply(arguments)//arguments 是 JavaScript 中的一个内置对象，它表示当前函数调用时传入的所有参数。
    that = this;
    return function () {
        return that.apply(null, args.concat(slice.apply(arguments)))
    }
    // 使用 that 变量来保存当前函数对象的引用，然后将其作为闭包函数的上下文使用。由于闭包函数中的 this 与外层函数的 this 不同，所以不能直接使用 this 来引用函数本身。
    // 相反，使用 that 来引用当前函数对象，并在闭包函数中使用 that.apply(null, args.concat(slice.apply(arguments))) 来调用函数本身，确保能够正确地执行。
})


var add1 = add.curry(1);
console.log(add1(6));// 7


