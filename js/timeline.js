const tweet0 = new Tweet("Stackoverflow",'@stack', 'Hi!, this is my first code tweet.','<div class="hi">Hello World</div>',getTweetdate()-7000);

now = new Date();

const tweet1 = new Tweet("Twitter",'@twitter', 'Oh Well!, this is my brother.','<div class="twitter">first Try</div>',getTweetdate()-8000);

now = new Date();

const tweet2 = new Tweet("Stackoverflow",'@stack', 'Hi!, this is my Second code tweet.','<div class="hi">Hello World 2</div>',getTweetdate());

now = new Date();

const tweet3 = new Tweet("Twitter",'@twitter', 'I like it!.','<div class="twitter">Second Try</div>',getTweetdate()-6000);

const timeLine = [tweet0,tweet1,tweet2,tweet3];

timeLine.sort(function (a, b) {
    if (a.datetime > b.datetime) {
      return 1;
    }
    if (a.datetime < b.datetime) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });

for(let i = 0; i <timeLine.length;i++){

    timeLine[i].print();
}

function getTweetdate(){

    let now = new Date();
    return now;

}

