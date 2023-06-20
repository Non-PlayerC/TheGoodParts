var counter = function (spec, my) {
    my = my || {};
    var count = spec.count || 0; // 私有计数器变量

    // 公共方法
    var getCount = function () {
        return count;
    };

    var increment = function () {
        count++;
    };

    // 添加到 my 中的特权方法
    my.reset = function () {
        count = 0;
    };

    return {
        getCount: getCount,
        increment: increment
    };
};

var c1 = counter({ count: 0 }); // 使用初始计数值创建第一个计数器
var c2 = counter({ count: 10 }); // 使用初始计数值创建第二个计数器

c1.increment(); // c1 计数器加 1
c1.increment(); // c1 计数器加 1
c2.increment(); // c2 计数器加 1

console.log(c1.getCount()); // 输出 2
console.log(c2.getCount()); // 输出 11

c1.reset(); // 重置 c1 计数器
console.log(c1.getCount()); // 输出 0
