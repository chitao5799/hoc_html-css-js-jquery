//setInterval(fn,ms) : trả về 1 id, fn là function và ms là millisecond,cứ sau x ms 
//hàm fn sẽ được thực hiện, và thực hiện liên tục
//clearInterval(id) loại bỏ.
var i=0;
var IntervalId=setInterval(function(){
	++i;
	console.log(i);
	if(i==5)
		clearInterval(IntervalId);
},1000);