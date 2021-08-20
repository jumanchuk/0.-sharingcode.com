const tweet0 = new Tweet("Stackoverflow",'@stack', 'Hi!, this is my first code tweet.','<div class="hi">Hello World</div>');
const tweet1 = new Tweet("Twitter",'@twitter', 'Oh Well!, this is my brother.','<div class="twitter">first Try</div>');
const tweet2 = new Tweet("Stackoverflow",'@stack', 'Hi!, this is my Second code tweet.','<div class="hi">Hello World 2</div>');
const tweet3 = new Tweet("Twitter",'@twitter', 'I like it!.','<div class="twitter">Second Try</div>');

const timeLine = [tweet0,tweet1,tweet2,tweet3];

for(let i = 0; i <timeLine.length;i++){

    timeLine[i].print();
}
