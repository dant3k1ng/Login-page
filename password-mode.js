var psw_eye = document.getElementById('eye');
psw_eye.addEventListener('click', changeMode);
var show_passw = false;

function changeMode(){
    if(show_passw == false){
        document.getElementById('eye').innerHTML = '<i class="fas fa-eye"></i>';
        document.getElementById('passw').type = 'text';
        show_passw = true;
    }
    else{
        document.getElementById('eye').innerHTML = '<i class="fas fa-eye-slash"></i>';
        document.getElementById('passw').type = 'password';
        show_passw = false;
    }

}