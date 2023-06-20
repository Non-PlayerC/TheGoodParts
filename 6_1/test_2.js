// var fade = function (node) {
//     var level = 1;
//     var step = function () {
//         var hex = level.toString(16);
//         node.style.background = '#FFFF' + hex + hex;
//         if (level < 5) {
//             level += 1
//             setTimeout(step, 100)
//         }
//     };
//     setTimeout(step, 100)
// }

// fade(document.body)



// var quo = function (status) {
//     return {
//         get_status: function () {
//             return status
//         }
//     }
// }

// var myQuo = quo("testText")
// console.log(myQuo.get_status());

console.log("test_2 is running");
var add_the_handlers = function (nodes) {
    var i;
    for (i = 0; i < nodes.length; i += 1) {
        nodes[i].onclick = function (i) {
            return function (e) {
                alert(e)
            }
        }(i)
    }
}
// var nodes = document.querySelectorAll('p');
// add_the_handlers(nodes)



Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this
}

String.method('deentityify', function () {
    var entity = {
        quot: '""',
        lt: '<',
        gt: '>',
    }
    return function () {
        return this.replace(/&([^&;]+);/g,//将带有 HTML 实体编码的字符串转换为原始字符串并返回
            function (a, b) {
                var r = entity[b]
                return typeof r === 'string' ? r : a;
            }
        )
    }
}())

// console.log('&lt;&quot;&gt;'.deentityify());




var serial_maker = function () {
    var prefix = '';
    var seq = 0;
    return {
        set_prefix: function (p) {
            prefix = String(p)
        },
        set_seq: function (s) {
            seq = String(s)
        },
        gensym: function () {
            var result = prefix + seq;
            seq += 1;
            return result;
        }
    }
}

var seqer = serial_maker();
seqer.set_prefix('Q')
seqer.set_seq(1000)
var unique = seqer.gensym();

console.log(unique);

console.log(seqer.seq);