//setTimeout(fn,ms) : trả về id của settimeout,ms -milliseconds, 
//fn là 1 function khi hết số ms thì sẽ được thực thi.
//clearTimeout(id) //loại bỏ settimeout
//timer
function done(){
	console.log('finish.');
}
console.log('start');
var timeoutID=setTimeout(done, 1000);
console.log('done');
setTimeout(function(){console.log('thứ 2.')},10000);
clearTimeout(timeoutID);