// var myMammal = {
//     name: 'Herb the Mammal',
//     get_name: function () {
//         return this.name;
//     },
//     says: function () {
//         return this.saying || '';
//     }
// }

// var myCat = Object.beget(myMammal)
// myCat.name = "Henrietta";
// myCat.saying = 'meow';
// myCat.puur = function (n) {
//     var i, s = '';
//     for (i = 0; i < n; i += 1) {
//         if (s) {
//             s += '-'
//         }
//         s += 'r'
//     }
//     return s;
// }

// myCat.get_name = function () {
//     return this.says + '' + this.name + '' + this.says
// }



var block = function () {
    var oldScope = scope;
    scope = Object.beget(scope)

    advance('{')
    parse(scope)
    advance('}')
    scope = oldScope
}

function foo() {
    var x = 1;
    console.log(x); // 输出 1
    block();
    console.log(x); // 输出 1
}

function bar() {
    block();
    console.log(y); // 抛出 ReferenceError 异常，y 未定义
}

var scope = Object.create(null);
scope.x = 10;
foo(); // 输出 1，再输出 1
bar(); // 抛出 ReferenceError 异常