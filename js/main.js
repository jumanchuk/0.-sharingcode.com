function toggleCodeBox(){

    let element = document.getElementById("code-box");
    
    if(element.hidden == true){
        element.hidden = false;
    }else{
        element.value ="";
        element.hidden = true;
    }
}

function send(){

    let text = document.getElementById('crd-text').textContent;
    let code = document.getElementById('code-box').innerText;

    const card = new Card("Jury Umanchuk", "@jumanchuk", text,code);

    clearBoxes();

    let element = document.getElementById("code-box");
    element.hidden = true;

    card.print();
}

function clearBoxes(){

    document.getElementById('crd-text').innerHTML = "";
    document.getElementById('code-box').innerHTML = "";
}


//Object Card
function Card(name,user,text,code){

    this.name = name;
    this.user   = user;
    this.text  = text;
    this.code  = code;

    let error = document.getElementById('error');

    this.print = function(){ 

        if ( this.text ==""){
            error.innerHTML = 'Houston, we have a problem!. <i class="fa fa-bomb"></i>'
            error.removeAttribute('hidden');
        }
        else{
            let hidden ="";

            error.innerHTML = "";
            error.hidden = "true";
            
            if(this.code==""){
                hidden ='hidden';
            }

            document.getElementById("crd-text").value = ""
            document.getElementById('crd-principal').insertAdjacentHTML('afterend',
            '<div class="col-12 card-timeline"><div class="container"><div class="row"><div class="col-2"><img src="img/user.png" ' +
            'class="rounded-circle user-img" alt="Cinque Terre"></div><div class="col-10"><div class="crd-label userName">' + this.name + '<span class="userId">'+
             this.user +'</span></div><div class="crd-label">'+ this.text +'<div class="codebox" '+ hidden +'><pre><code data-language="css"><xmp>'+ this.code +'</xmp></code></pre></div>' +
            '<div class="d-flex justify-content-around card-submenu"><a class="p-2 fa-tw-icons rounded-circle" href="#">'+
            '<i class="fa fa-comment-o"> 0</i></a><a class="p-2 fa-tw-icons rounded-circle" href="#" onclick="bookmark(this)"><i class="fa fa-star"></i></a>'+
            '<a class="p-2 fa-tw-icons rounded-circle" href="#" onclick="rtw(this)"><i class="fa fa-retweet"> 0</i>'+
            '</a><a class="p-2 fa-tw-icons rounded-circle" href="#" onclick="like(this)">'+
            '<i class="fa fa-heart"> 0</i></a></div></div></div></div></div>');
        }

    }
}

function like(element){

        let value = element.children[0].textContent;    

    if(!element.classList.contains("like")) {

        let sum =  parseInt(value) + parseInt(1);

        if(sum<1){
        element.children[0].textContent = ' 0';
        }else{
        element.children[0].textContent = '\u00A0' + sum;
        }

        element.style.setProperty("color", "red", "important");
        element.classList.add("like");
    } else{

        let sum =  parseInt(value) - parseInt(1);

        if(sum<1){
            element.children[0].textContent = ' 0';
        }else{
            element.children[0].textContent = '\u00A0' + sum;
        }

        element.style.setProperty("color", "white", "important");
        element.classList.remove("like");
    }
}


function rtw(element){

        let value = element.children[0].textContent;

    if(!element.classList.contains("rtw")) {

        let sum =  parseInt(value) + parseInt(1);

        if(sum<1){
            element.children[0].textContent = ' 0';
        }else{
            element.children[0].textContent = '\u00A0' + sum;
        }

        element.style.setProperty("color", "green", "important");
        element.classList.add("rtw");
    } else {

        let sum =  parseInt(value) - parseInt(1);

        if(sum<1){
            element.children[0].textContent = ' 0';
        }else{
        element.children[0].textContent = '\u00A0' + sum;
        }
        
        element.style.setProperty("color", "white", "important");
        element.classList.remove("rtw");

    }
}

function bookmark(element){

    
    let value = document.getElementById("fav").children[0].textContent;
    
    if(!element.classList.contains("bookmark")) {

        element.style.setProperty("color", "rgb(247, 252, 0)", "important");
        element.classList.add("bookmark");

        let sum =  parseInt(value) + parseInt(1);

        if(sum<1){
            document.getElementById("fav").children[0].textContent= ' 0';
        }else{
            document.getElementById("fav").children[0].textContent = '\u00A0' + sum;
        }
                                
    } else {

        element.style.setProperty("color", "white", "important");
        element.classList.remove("bookmark");
        
        let sum =  parseInt(value) - parseInt(1);

        if(sum<1){
            document.getElementById("fav").children[0].textContent= ' 0';
        }else{
            document.getElementById("fav").children[0].textContent = '\u00A0' + sum;
        }

    }
}