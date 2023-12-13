var pass = document.getElementById('pass');
var bnt= document.getElementById('bnt');
function Showpass(){
    if(pass.type == 'password'){
        pass.type = 'text';
        bnt.innerHTML='Hide';
    }else{
        pass.type = 'password';
        bnt.innerHTML='Show';
    }
}