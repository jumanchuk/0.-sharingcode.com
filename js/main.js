const name = localStorage.getItem('name')
const user = localStorage.getItem('user')

if(name || user){

    /* Show Name in footer */

}else{

    let name = document.getElementById("name").value;
    let user = document.getElementById("user").value;

    localStorage.setItem("user", user);
    localStorage.setItem("name", name);
}


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

    now = new Date();

    const tweet = new Tweet(4,name,'@'+user, text,code,now);

    clearBoxes();
    let element = document.getElementById("code-box");
    element.hidden = true;

    tweet.print();
}

function clearBoxes(){

    document.getElementById('crd-text').innerHTML = "";
    document.getElementById('code-box').innerHTML = "";
}

//Object Card
class Tweet {

    constructor(id, name, user, text, code, datetime) {

        this.id = id;
        this.name = name;
        this.user = user;
        this.text = text;
        this.code = code;
        this.datetime = datetime;

    }

    print(){

        let error = document.getElementById('error');

        if (this.text == "") {
            error.innerHTML = 'Houston, we have a problem!. <i class="fa fa-bomb"></i>';
            error.removeAttribute('hidden');
        }
        else {
            let hidden = "";

            error.innerHTML = "";
            error.hidden = "true";

            if (this.code == "") {
                hidden = 'hidden';
            }

            document.getElementById("crd-text").value = "";
            document.getElementById('crd-principal').insertAdjacentHTML('afterend',
            '<div class="col-12 card-timeline">'+
                '<div class="container">'+
                    '<div class="row">'+
                        '<div class="col-2">'+
                            '<img src="img/user.png" class="rounded-circle user-img" alt="Cinque Terre">'+ 
                        '</div>'+

                        '<div class="col-10">'+
                            '<div class="d-flex justify-content-start crd-label userlabel">'+
                                '<div class="p-2 user">'+ this.name + '</div>'+
                                '<div class="p-2 user">' + this.user + '</div>'+
                                '<div class="p-2 user">' + formatDate(this.datetime) + '</div>'+
                            '</div>'+

                            '<div class="crd-label">' + this.text + 
                                '<div class="codebox" ' + hidden + '>'+
                                    '<pre>'+
                                        '<code data-language="css">'+
                                            '<xmp>' + this.code + 
                                            '</xmp>'+
                                        '</code>'+
                                    '</pre>'+
                                '</div>' +

                                '<div class="d-flex justify-content-around card-submenu">'+

                                    '<a class="p-2 fa-tw-icons rounded-circle" href="#">' +
                                        '<i class="fa fa-comment-o"> 0'+
                                        '</i>'+
                                    '</a>'+

                                    '<a class="p-2 fa-tw-icons rounded-circle" href="#" onclick="addToBookmark(this)">'+
                                        '<i class="fa fa-star">'+
                                        '</i>'+
                                    '</a>' +

                                    '<a class="p-2 fa-tw-icons rounded-circle" href="#" onclick="retweet(this)">'+
                                        '<i class="fa fa-retweet"> 0'+
                                        '</i>' +
                                    '</a>'+
                                    
                                    '<a class="p-2 fa-tw-icons rounded-circle" href="#" onclick="like(this)">' +
                                        '<i class="fa fa-heart"> 0'+
                                        '</i>'+
                                    '</a>'+
                                    
                                '</div>'+
                            '</div>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
            '</div>'
            );
        }
    }
}
//End Object Card

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

function retweet(element){

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

function addToBookmark(element){
        
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

function formatDate(date){
//font: https://javascript.info/date

    if ((new Date() - date) / 1000 < 1) {
        return 'right now';
    } 
    else if ((new Date() - date) / 1000 > 1 && (new Date() - date) / 1000 < 60) 
    {
        let n = Math.floor((new Date() - date) / 1000);
        return `${n} sec. ago`;
        
    } else if ((new Date() - date) / 1000 > 60 && (new Date() - date) / 1000 < 3600) {

        let m = Math.floor((new Date() - date) / (1000 * 60));
        return `${m} min. ago`;

    } else if ((new Date() - date) / 1000 > 3600) {

        let newDate = new Date(date);
        let day = newDate.getDate();
        let month = newDate.getMonth();

    if (day < 10) {
        day = `0${day}`
    }

    if (month < 10) {
        month = `0${month}`
    }
        return `${day}:${month}:${newDate.getFullYear()} ${newDate.getDay}`;
    }

}