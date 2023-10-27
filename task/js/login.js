//注册和登录按钮切换
var bregister = document.querySelector('.bregister');
var blogin = document.querySelector('.blogin');
var register = document.querySelector('.register');
var login = document.querySelector('.login');
bregister.onclick = function () {
    register.style.display = 'block';
    login.style.display = 'none';
}
blogin.onclick = function () {
    register.style.display = 'none';
    login.style.display = 'block';
}
//本地储存
if (localStorage.getItem('users') === null) {
    localStorage.setItem('users', '');
}
var registersub = document.querySelector('.registerSub');
var loginsub = document.querySelector('.loginSub');

registersub.onclick = function register() {
    const username = document.querySelector('#reun').value;
    const password = document.querySelector('#repwd').value;
    if (username && password) {
        const users = localStorage.getItem('users') || '';
        if (users.includes(username)) {
            document.querySelector('.registerMessage').innerText = '该用户名已被注册';
        } else {
            localStorage.setItem('users', users + ',' + username);
            document.querySelector('.registerMessage').innerText = '注册成功';
        }
    } else {
        document.querySelector('.registerMessage').innerText = '请填写用户名和密码';
    }
    return false;

}
loginsub.onclick = function login() {

    const username = document.querySelector('#loun').value;
    const password = document.querySelector('#lopwd').value;
    var mainbox = document.querySelector('.mainbox');
    if (username && password) {
        const users = localStorage.getItem('users') || '';
        if (users.includes(username)) {
            document.querySelector('.loginMessage').innerText = '登录成功';
            mainbox.classList.add('fade-out');

            setTimeout(function () {
                window.location.href = 'index.html';
            }, 1000);
        } else {
            document.querySelector('.loginMessage').innerText = '用户名或密码不正确';
        }
    } else {
        document.querySelector('.loginMessage').innerText = '请填写用户名和密码';
    }
    return false;

};

