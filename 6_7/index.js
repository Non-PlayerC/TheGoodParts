(function () {
    var body = document.body;
    body.style.backgroundColor = "rgb(242, 202, 201)";
    var code = 'var body = document.body;\nbody.style.backgroundColor = \'red\';\n';
    var pre = document.createElement('pre');
    pre.innerText = code;
    document.body.appendChild(pre);
}())