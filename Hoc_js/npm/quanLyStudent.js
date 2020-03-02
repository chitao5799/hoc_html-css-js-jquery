var readlineSync = require('readline-sync')
var fs = require('fs')
var dulieu = [];
while (true) {
    console.log('---------------------------------');
    console.log('1.đọc file.');
    console.log('2.nhập thêm 1 student.');
    console.log('3.thoát.');   
    var options = readlineSync.question('What is your option? '); //   Tạo options cho Client  
    if (options == 1) {
        var temp=fs.readFileSync('./data.json', { encoding: 'utf8' });//Đọc data từ file data.json
        dulieu.push(JSON.parse(temp) );
        /*lưu dữ liệu vừa đọc vào mảng để khi nhập thêm dữ liệu mới vào mảng và
         ghi file thì file có cả dl mới và dl cũ*/
        console.log(temp);  // 
    }
    if (options == 2) {
        var myClassStudent = {};                                             // tạo mảng trống để lưu dữ liệu
        myClassStudent.name = readlineSync.question('Student Name: ');
        myClassStudent.gender = readlineSync.question('Gender Student (Male/Female): ');
        myClassStudent.weight = readlineSync.question('Weight: ');
        myClassStudent.height = readlineSync.question('Height: ')

        dulieu.push(myClassStudent);                               // đưa data từ mảng mới tạo vào data.student
        fs.writeFileSync('./data.json', JSON.stringify(dulieu));           // Ghi data vào file data.json
    }
    if (options == 3) {
        break;                                                             // Thoát
    }
}