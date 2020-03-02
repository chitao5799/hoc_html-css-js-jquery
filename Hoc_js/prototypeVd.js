function Person(name,password){
    this.name=name;
    this.password=password;
}
Person.prototype.getName=function(){
    return this.name;
}
Person.prototype.getLevel=function(){
    return this.level ;
}
Person.prototype.level='admin';
function User(name){
    this.name=name;
}
User.prototype =new Person(); //User kế thừa từ Person

var person=new Person("ty","adfa");
var user=new User("teo","ưer345");
console.log(user.getName()); //teo
console.log(user.getLevel());//admin
console.log(person.getName());//ty
//thêm hàm mới vào đối tượng sẵn có của js
Date.prototype.vnFormat=function(){
    var yyyy=this.getFullYear();
    var mm=this.getMonth()+1;
    var dd=this.getDate();
    return dd+"/"+mm+"/"+yyyy;
}
var now=new Date();
var xms=new Date(2019,02,25);
console.log(now.vnFormat());//15/12/2019
console.log(xms.vnFormat());// 25/3/2019