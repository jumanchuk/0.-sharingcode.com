
let buttom = document.getElementById("btn-logout");
buttom.addEventListener("click",LogOut);

function LogOut(){

    localStorage.removeItem("name");
    localStorage.removeItem("user");
    
    window.location.href = 'index.html'; //relative to domain
}
