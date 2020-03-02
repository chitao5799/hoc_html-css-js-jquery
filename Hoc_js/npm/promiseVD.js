//var fs=require('promise-fs'); //đây là module ngoài

//cách 1
// fs.readFile('song.txt',{encoding :'utf-8'})
//   .then(function(dl){
//   	console.log(dl);
//   })
//   .catch(function(err){
//   	console.log(err);
//   });

//cách 2: viết tách ra cho dễ nhìn
// function onDone(dl){
// 	console.log(dl);
// }
// function onError(err){
// 	console.log(err);
// }
// function docFile(path){
// 	return fs.readFile(path,{encoding : 'utf-8'});
// }
//  docFile('song.txt')
//  	.then(onDone)
//  	.then(function(){
//  		return docFile('song2.txt');
//  	})
//  	.then(onDone)
//  	.catch(onError);

 /* hàm trả về promise sẽ có phương thức then và catch. trong then
 sẽ truyền vào 1 hàm và hàm này có 1 tham số là data đọc được
 từ file, trong tham số của  catch có 1 hàm và hàm này có tham số truyền
 vào error*/
/* ví dụ:
tạo promise: 
viết hàm trả về đối tượng promise, hàm tạo đối tượng này có 1 phương thức 
nhận 2 tham số  là 2 hàm resolve và reject. resolve nhận tham số là data và 
reject nhận tham số là error.
dùng promise thì có hàm then và hàm catch.
*/
 var fs=require('fs');
 function readFilePromise(path){
 	return new Promise(function(resolve,reject){
 		fs.readFile(path,{encoding:'utf-8'},function(err,data){
 			if(err){
 				reject(err);
 			}else {
 				resolve(data);
 			}
 		});
 	});
 }
 // readFilePromise('song.txt')
 // 	.then(function(dl){
 // 		console.log(dl);
 // 		return readFilePromise('./song2.txt');
 // 	})
 // 	.then(function(dl2){
 // 		console.log(dl2);
 // 		return readFilePromise('./song3.txt');
 // 	})
 // 	.then(function(dl3){
 // 		console.log(dl3);
 // 	})
 // 	.catch(function(error){
 // 		console.log(error);
 // 	});
 
 //cách khác: dùng hàm all()
 //all() nhận tham số là mảng các promise và then() có function với tham số là 
 //mảng các dữ liệu nhận được khi sử lý thành công
 Promise.all([
 	readFilePromise('./song.txt'), //resolved
 	readFilePromise('./song2.txt'),
 	readFilePromise('./song3.txt')
 	]).then(function(values){
 		console.log(values);
 	}).catch(function(error){
 		console.log(error);
 	});