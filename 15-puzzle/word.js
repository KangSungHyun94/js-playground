var str = document.getElementById('word1').innerHTML;
var word2 = document.getElementById('word2');

var game={};
game.word=str.split('');
game.btns=[];

for (var i = 0; i < str.length; i++) {
    var btn = document.createElement('button');
    btn.innerHTML = str[i];
    word2.appendChild(btn);
    game.btns.push(btn);
}

var swap = function () {
    var a =game.word.length-1;
    var strg;
    for( var i = 0; i < a-i; i++){
        strg=game.word[i];
        game.word[i]=game.word[a-i];
        game.word[a-i]=strg;
    }
    game.copyBtnText();
};

game.copyBtnText=function(){
    for(var i=0; i < this.word.length; i++){
        this.btns[i].innerHTML=this.word[i];
    }
}

var rshift = function () {
    
    var s = game.word.pop();
    game.word.unshift(s);
    game.copyBtnText();
};

var lshift = function () {
    
    var s = game.word.shift();
    game.word.push(s);
    game.copyBtnText();
};