//requirement
// a student management app that is able to:
//show current list
// add new student
 var readlineSync = require('readline-sync');
 var fs = require('fs');

 var students =[];

  function loadData(){
  	var fileContent=fs.readFileSync('./student.json');
  	students=JSON.parse(fileContent);
  }

  function showStudent(){
  	for (var student of students) {
  		console.log(student.name,' - ',student.age);
  	}
  }

  function showCreateStudent(){
  	var name=readlineSync.question('name:');
  	var age=readlineSync.question('age:');
  	var student={
  		name:name,
  		age:parseInt(age)
  	};
  	students.push(student);
  }
  function saveAndExit(){
  	var content=JSON.stringify(students);
  	fs.writeFileSync('./student.json',content,{ encoding : 'utf-8'});
  }
 function showMenu(){
 	console.log('-------------------------');
 	console.log('1. show all student.');
 	console.log('2. creat a new student.');
 	console.log('3. save or exit.');

 	var option=readlineSync.question('>select option:');
 	switch(option){
 		case '1': showStudent();showMenu(); break;
 		case '2': showCreateStudent();showMenu(); break;
 		case '3': saveAndExit(); break;
 		default: console.log('wrong option');
 	}
 }
 function main(){
 	
 	loadData();
 	
 	showMenu();
 	
 }
 main();