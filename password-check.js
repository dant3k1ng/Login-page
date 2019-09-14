/* This is just an example showing how site work, not official login and password checking */

var login_btn = document.getElementById('submit');
login_btn.addEventListener('click', check);

function check(){
    var login = 'admin';
    var password = 'qwerty123';

    var input_login = document.getElementById('login').value;
    var input_password = document.getElementById('passw').value;
    var checkbox = document.getElementById('checkbox');

    if(input_login != login){
        var login_field = document.getElementById('login');
        login_field.style.backgroundColor = '#ff000018';
    }
    else{
        var login_field = document.getElementById('login');
        login_field.style.backgroundColor = '#ffffff00';
    }

    if(input_password != password){
        var passw_field = document.getElementById('passw');
        passw_field.style.backgroundColor = '#ff000018';
    }
    else{
        var passw_field = document.getElementById('passw');
        passw_field.style.backgroundColor = '#ffffff00';
    }
}