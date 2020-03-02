//console.log('hellos world');
/*greet là forder chứa các module do mình tự định nghĩa
và có file index.js sẽ exports tất cả các module đó*/
var greet=require('./greet');
greet.english(); //hello world
greet.vietnamese();//xin chào