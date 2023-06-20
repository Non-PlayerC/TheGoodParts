Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this
}


var eventuality = function (that) {
    var registry = {};

    that.fire = function (event) {
        var array, func, handler, i, type = typeof event === 'string' ? event : event.type

        if (registry.hasOwnProperty(type)) {
            array = registry[type];
            for (i = 0; i, array.length; i += 1) {
                handler = array[i]

                func = handler.method;
                if (typeof func === 'string') {
                    func = this[func]
                }

                func.apply(this, handler.parameters || [event])
            }
        }
        return this;
    }
    that.on = function (type, method, parameters) {
        var handler = {
            method: method,
            parameters: parameters
        };
        if (registry.hasOwnProperty(type)) {
            registry[type].push(handler)
        } else {
            registry[type] = [handler]
        }
        return this;
    }
    return this;
}

// 定义 user 对象
var user = {
    name: '小明',
    age: 18,
    gender: '男'
};

// 添加自定义事件机制
eventuality(user);

// 注册一个名为 'changeName' 的事件处理函数
user.on('changeName', function (newName, oldName) {
    console.log('用户姓名从 ' + oldName + ' 变为 ' + newName);
});

// 修改用户姓名并触发 'changeName' 事件
user.name = '小红';
user.fire('changeName', ['小红', '小明']);
