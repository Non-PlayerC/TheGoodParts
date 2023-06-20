function foo() {
    bar();
    var x = 1;
    function bar() {
        console.log("Hello, world!");
    }
}
foo();



function foo() {
    function bar() {
        console.log("Hello, world!");
    }
    var x;
    bar();
    x = 1;
}
foo();


// myFunction();

var myFunction = function () {
    console.log("Function is not called");
}//使用函数表达式（function expression）定义函数时，变量会被提升，但它的值是 undefined



// 函数声明
function add() { }
/*
函数声明具有以下特点：

函数声明会被提升到所在作用域的顶部（函数或全局作用域）。这意味着我们可以在函数声明前面调用该函数。
函数声明有一个显式的函数名，在调试代码时更容易追踪函数调用栈。
函数声明可以在所在作用域内重复声明，后面的声明会覆盖前面的声明。
*/

// 函数表达式
var add = function (a, b) {
    return a + b;
}
/*
函数语句具有以下特点：

函数语句不会被提升到所在作用域的顶部。这意味着在函数赋值之前调用该函数会抛出错误。
函数语句可以通过匿名函数的方式定义一个函数，也可以在函数名后面添加圆括号，使用函数构造器的方式调用该函数。
函数语句不可以在所在作用域内重复声明，后面的声明会抛出错误。
*/



// for (var i ) {//在循环中使用 var 声明的变量，相当于在每次迭代中重复使用同一个变量 i 和 div_id
//     //使用 let 声明变量 div_id 和 i，可以在每次迭代中创建一个新的变量
//     div_id = div[i].id,
//     fivs[i].onclick = function () {
//         alert(div_id)
//     }
// };


// divs.dorEach(function (div) {
//     div.onclick = function () {
//         alert(div.id)
//     }
// })


