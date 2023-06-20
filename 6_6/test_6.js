function Counter() {
    let count = 0;

    this.increment = function () {
        count++;
        console.log(`count: ${count}`);
    };

    this.decrement = function () {
        count--;
        console.log(`count: ${count}`);
    };
}

// const counter = new Counter();
// counter.increment(); // 输出 count: 1
// counter.increment(); // 输出 count: 2
// counter.decrement(); // 输出 count: 1


function gizmo(id) {
    let result = id + 6;
    return {
        result,
        toString: function () {
            return "gizmo" + id;
        }
    }
}

function hoozit(id) {
    var that = gizmo(id);
    that.test = function (testid) {
        return testid === id;
    };
    return that;
}

// const g = new gizmo(1);
// console.log(g.toString()); // 输出 "gizmo1"

// const h = new hoozit(2);
// console.log(h.toString()); // 输出 "gizmo2"
// console.log(h.test(2)); // 输出 true
// console.log(h.test(3)); // 输出 false
// console.log(h.result); // 8


function myFunc() {
    console.log(this); // 输出当前上下文对象
}

myFunc();