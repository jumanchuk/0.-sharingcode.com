let dataBase = localStorage.getItem('dataBase');

if (!dataBase){

  tweets = [
    { id: 3, name: 'Stackoverflow', user: '@stack', text:'Hi!, this is my first code tweet.',code:'<div class="hi">Hello World</div>',datetime:getTweetdate()-7000},
    { id: 4, name: 'Twitter', user: '@twitter', text: 'Oh Well!, this is my brother.',code: '<div class="twitter">first Try</div>',datetime:getTweetdate()-3000},
    { id: 1, name: 'Stackoverflow', user: '@stack', text: 'Hi!, this is my Second code tweet.',code:'<div class="hi">Hello World 2</div>',datetime:getTweetdate()-1},
    { id: 2, name: 'Twitter', user: '@twitter', text: 'I like it!.',code:'<div class="twitter">Second Try</div>',datetime:getTweetdate()-6000}];

    localStorage.setItem('dataBase',JSON.stringify(tweets));

}else{

  tweets = JSON.parse(dataBase);

}

tweets.sort(function (a, b) {
    if (a.datetime > b.datetime) {
      return 1;
    }
    if (a.datetime < b.datetime) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

for(let i = 0; i <tweets.length;i++){

    const tweet = new Tweet(tweets[i].id,tweets[i].name,tweets[i].user,tweets[i].text,tweets[i].code,tweets[i].datetime);
    tweet.print();
}

function getTweetdate(){

    let now = new Date();
    return now;

}

