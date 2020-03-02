//node module
var Mouse=require('./mouse'); //hoặc './mouse.js'
function Cat(){
	this.stomach=[];
};
Cat.prototype.eat=function(mouse){
	this.stomach.push(mouse);
	mouse.die();
};
var mickey=new Mouse('black');
var jerry = new Mouse('orange');

console.log(mickey);
console.log(jerry);

var tom=new Cat();
tom.eat(mickey);
tom.eat(jerry);
console.log(tom);