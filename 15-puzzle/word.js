//html elements
var word2 = document.getElementById('word2'); //buttons
var word1 = document.getElementById('word1'); //answer
var check = document.getElementById('check'); //word1 === word2?
var progress = document.getElementById('progress'); //porgress check

//game objects
var game={
    'btns':[],
    'maxPlay':3,
    'current':0
};
game.words = 'apple,linux,javascript,tutorial,codesquad,baby,girlfriend,legend'.split(',');

//chose 1 word from words;
game.choose = function() {
    var idx = Math.floor(Math.random()*this.words.length)
    this.answer=this.words[idx]; //answer 선택된 문자열 들어감.
    this.letters = this.answer.split(''); //letters에는 선택된 문자열을 한글자씩 쪼개서 배열로 만듦.
    word1.innerHTML=this.answer;
};
game.addButtons= function(){
    for (var i = 0; i < this.letters.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};

game.checkGood=function(){
    return this.answer===this.letters.join('');
};

game.updateDisplay = function(){
    if(game.checkGood()){
        check.innerHTML='일치합니다.';
    }else {
        check.innerHTML='일치하지 않습니다.';
    }
};

game.init=function(){
    this.choose();
    this.addButtons();
    this.updateDisplay();
    
};
game.init();

game.copyBtnText=function(){
    for(var i=0; i < this.letters.length; i++){
        this.btns[i].innerHTML=this.letters[i];
    }
};

game.swap=function(){
    var temp=[];
    //coply and swap
    while (game.letters.length !=0){
        var s = game.letters.pop();
        temp.push(s);
    }
    game.letters=temp;
    game.copyBtnText();
    game.updateDisplay();
};

game.rshift=function(){
    var s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
};
game.lshift=function(){
    var s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    game.updateDisplay();
};

game.progress=function(){
    if(game.checkGood()){
        game.current++;
        for(var i=0; i<this.answer.length; i++){
            this.btns.shift();
            word2.removeChild(word2.childNodes[0]);
        }
        game.init();
        var str = "";
        for (var i = 0; i < game.current;i++){
            str +="0";
        }
        progress.innerHTML=str;
    }
    if (game.current==game.maxPlay){
        alert("Good! Thank you for playing");
    }
};
//evnt handler for swap button
var swap = function () {
    game.swap();
    game.progress();
};

var rshift = function () {
    game.rshift();
    game.progress();
};

var lshift = function () {
    game.lshift();
    game.progress();
};
//shuffle
game.shuffle = function () {
    var toggle = Math.floor(Math.random() * 2) === 0;

    if (toggle) {
        game.swap();
    }

    var n = Math.floor(Math.random() * game.letters.length);

    for (var i = 0; i < n; i++) {
        game.rshift();
    }
};
game.shuffle();