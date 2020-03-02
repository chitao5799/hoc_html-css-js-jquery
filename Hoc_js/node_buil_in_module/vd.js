var fs=require('fs'); 
//fs là 1 trong các module có sẵn (xem thêm ở link trên) nên ko cần chỉ đường dẫn
var text=fs.readFileSync('./vd.txt',{encoding: 'utf8'});//đọc file
console.log(text);
fs.writeFileSync('./vd2.txt','I am ngày mới');//ghi vào file