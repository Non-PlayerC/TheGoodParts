Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this
}


Function.method("new", function () {
    var that = Object.beget(this.prototype)
    var other = this.apply(that, arguments)

    return (typeof other === 'object' && other) || that
})

var Mammal = function (name) {
    this.name = name
}

Mammal.prototype.get_name = function () {
    return this.name
}

Mammal.prototype.says = function () {
    return this.saying || '';
}

// var myMammal = new Mammal('Herb the Mammal')
// var name = myMammal.get_name();
// console.log("name is >>", name);


var Cat = function (name) {
    this.name = name
    this.saying = this.saying
}

Cat.prototype = new Mammal

Cat.prototype.purr = function (n) {
    var i, s = '';
    for (i = 0; i <= n; i += 1) {
        if (s) {
            s += '-'
        }
        s += 'r'
    }
    return s
}

Cat.prototype.get_name = function () {
    return this.says() + '' + this.name + ' ' + this.says();
}

// var myCat = new Cat("Henrietta")
// var says = myCat.says()
// var purr = myCat.purr(5)
// var name = myCat.get_name(5)
// console.log(myCat, says, purr, name);


Function.method('inherits', function (Parent) {
    this.prototype = new Parent();
    return this;
})

var Cat = function (name) {
    this.name = name
    this.saying = 'meow'
}.inherits(Mammal).method('puur', function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-'
        }
        s += 'r'
    }
    return s
}).method('get_name', function () {
    return this.says() + '' + this.name + '' + this.says()
})