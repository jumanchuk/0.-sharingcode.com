function send(){

    let text = document.getElementById('crd-text').value;
    const card = new Card("Jury Umanchuk", "@jumanchuk", text);
    
    card.print();
}

//Object Card
function Card(name,user,text){

    this.name = name;
    this.user   = user;
    this.text  = text;

    let error = document.getElementById('error');

    this.print = function(){ 

        if ( this.text ==""){
            error.innerHTML = 'Houston, we have a problem!. <i class="fa fa-bomb"></i>'
            error.removeAttribute('hidden');
        }
        else{

            error.innerHTML = "";
            error.hidden = "true";

            document.getElementById("crd-text").value = ""
            document.getElementById('crd-principal').insertAdjacentHTML('afterend',
            '<div class="col-12 card-border"><div class="container"><div class="row"><div class="col-2"><img src="img/user.png" ' +
            'class="rounded-circle user-img" alt="Cinque Terre"></div><div class="col"><div class="crd-label userName">' + this.name + ' <span class="userId">'+ this.user +'k</span></div><div class="crd-label">'+ this.text +'</div>' +
            '<div class="d-flex justify-content-around card-submenu"><a class="p-2 fa-tw-icons rounded-circle" href="#">'+
            '<i class="fa fa-comment-o"> 0</i></a><a class="p-2 fa-tw-icons rounded-circle" href="#" onclick="bookmark(this)"><i class="fa fa-star"></i></a>'+
            '<a class="p-2 fa-tw-icons rounded-circle" href="#" onclick="rtw(this)"><i class="fa fa-retweet"> 0</i>'+
            '</a><a class="p-2 fa-tw-icons rounded-circle" href="#" onclick="like(this)">'+
            '<i class="fa fa-heart"> 0</i></a></div></div></div></div></div>');
        }

    }
}

function like(element){
    
    if(!element.classList.contains("like")) {
        let value = element.children[0].textContent;
        let sum =  parseInt(value) + parseInt(1);

        if(sum<1){
        element.children[0].textContent = ' 0';
        }else{
        element.children[0].textContent = '\u00A0' + sum;
        }

        element.style.setProperty("color", "red", "important");
        element.classList.add("like");
    } else{

        let value = element.children[0].textContent;
        let sum =  parseInt(value) - parseInt(1);

        if(sum<1){
        element.children[0].textContent = ' 0';
        }else{
        element.children[0].textContent = '\u00A0' - sum;
        }

        element.style.setProperty("color", "white", "important");
        element.classList.remove("like");
    }
}


function rtw(element){
    
    if(!element.classList.contains("rtw")) {
        let value = element.children[0].textContent;
        let sum =  parseInt(value) + parseInt(1);

        if(sum<1){
        element.children[0].textContent = ' 0';
        }else{
        element.children[0].textContent = '\u00A0' + sum;
        }

        element.style.setProperty("color", "green", "important");
        element.classList.add("rtw");
    } else {

        let value = element.children[0].textContent;
        let sum =  parseInt(value) - parseInt(1);

        if(sum<1){
            element.children[0].textContent = ' 0';
        }else{
        element.children[0].textContent = '\u00A0' - sum;
        }
        
        element.style.setProperty("color", "white", "important");
        element.classList.remove("rtw");

    }
}

function bookmark(element){
    
    if(!element.classList.contains("bookmark")) {

        element.style.setProperty("color", "rgb(247, 252, 0)", "important");
        element.classList.add("bookmark");
                                
    } else {

        element.style.setProperty("color", "white", "important");
        element.classList.remove("bookmark");

    }
}