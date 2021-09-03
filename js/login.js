
const namels = localStorage.getItem('name')
const userls = localStorage.getItem('user')

if(namels || userls){

    redireccionar(); //redirect
}else{

    let buttom = document.getElementById("btn-login");
    buttom.addEventListener("click",login);
}

function login(){

    let name = document.getElementById("name").value;
    let user = document.getElementById("user").value;

    localStorage.setItem("user", user);
    localStorage.setItem("name", name);

    setTimeout ("redireccionar()", 5000); //tiempo expresado en milisegundos
}


function redireccionar(){
    window.location.href = './timeline.html'; //relative to domain
} 
