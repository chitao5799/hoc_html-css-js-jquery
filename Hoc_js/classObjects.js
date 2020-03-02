class Cat{
	constructor(name,age,address){//chỉ có duy nhất 1 con structor hoặc ko có
		this.name=name;
		this.address=address;
		this.age=age;
	}
	speak(){  //method
		return this.name + 'roars';
	}
	set color(c){
		this.eyeColor=c;
	}
	get catInfo(){
		return this.name+' '+this.age+' '+this.address;
	}
	static move(){//truy cập phương thức static phải dùng tên class
		return 'Cat is moving';
	}
}

var X= class Dog{
	constructor(name,age){//chỉ có duy nhất 1 con structor hoặc ko có
		this.name=name;
		this.age=age;
	}
}
//tạo đối tượng của class ở dưới nơi định nghĩa class nếu ở trên sẽ báo lỗi
var tom=new Cat('tom',2,'hn');
console.log(tom.catInfo);//tom 2 hn
console.log(Cat.move());
var cho=new X('mèo',23);
console.log(cho);//Dog { name: 'mèo', age: 23 }