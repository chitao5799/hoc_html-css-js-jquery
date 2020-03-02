//function(){      }  //lỗi
( function(){      } )  //không lỗi
var name="mai";
//thực thi hàm ngay sau khi khởi tạo, đặt hàm trong ( );
( function (abc){ 
        var name="hoa";
        console.log(name); //hoa
        console.log(abc); //quỳnh
    }("quỳnh") /*dấu () ở đây biểu thị cho việc gọi hàm
    và hàm này sẽ được thực thi*/
);
console.log(name); //mai
var ham=function(){ var name="dao "; }
ham();
console.log(name); //mai
do{
    var name="thao"; /*trong vòng lặp nếu có biến cục bộ mà trùng tên với
    biến global thì biến global sẽ bị đổi giá trị*/
}while(false);
console.log(name);//thao
