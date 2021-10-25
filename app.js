

///Operators

//add
//+
//subtract
//-
//multiply
//*
//divide
//  /
// percentage
//  %



//Concatenation of strings

// var name = "Sarim";
// var number = 17;

// this is the right way//

//  alert(name + number)



// var lessonAuthor = "Mark"; 
// var guyWhoKeepsSayingHisOwnName = "Mark"; 
// var x = "Mark";

// alert(x);

// how to multiply numbers
//   var num1 = 56;
//   var num2 = 85;
//   alert(num1 % num2);



//   var num = 90;
//   var num1 = 07777;

//   document.write(num + num1)


// var num = 10;

// var update_num = num++; ///POST INCREMENT///
// var update_num = ++num; ///PRE INCREMENT///

// var num2 = num;

// alert("update_num" + " " + ":" + " " + update_num);
// alert("num2" + " " + ":" + " " + num2)

// var num = 60;
// var update_num = num--; ///POST DECREMENT
// var update_num = --num; //PRE DECREMENT

// num2 = num;
// alert("update_num" + " " + ":" + " " + update_num)
// alert("num2" + " " + ":" + " " + num2)


// var a = 89;
//  var result = --a + --a + ++a + a++ + a + a-- + a  

//  alert(result);
var greetings = "Assalam - u - Alaikum!";
alert(greetings);
var name = prompt("Enter Your Name :");
var father_name = prompt("Enter Your Father Name :");
var age = prompt("Enter Your Age :");
var Class = prompt("Enter Your Class :");
var roll = prompt("Enter Your Roll Number :")
var math = prompt("Enter Your Maths Marks :");
var urdu = prompt("Enter Your Urdu Marks :");
var physics = prompt("Enter Your Physics Marks :");
var biology = prompt("Enter Your Biology Marks :");
var english = prompt("Enter Your English Marks :");



var obtained_marks = parseInt(math) +  parseInt(physics) + parseInt(urdu) + parseInt(biology) + parseInt(english);
var percentage = obtained_marks * 100 / 500;



document.write("<b><i>Your Name  is :<i><b>" + " " + name + "<br>" + "<br>");
document.write("Your Father Name is :" + " " + father_name + "<br>"  + "<br>");
document.write("Your Age is :" + " " + age + "<br>"  + "<br>");
document.write("Your Class is :" + " " + Class + "<br>"  + "<br>");
document.write("Your Roll No is :" + " " + roll + "<br>"  + "<br>");
document.write("Your Total Marks is :" + " " + obtained_marks + "<br/>"+ "<br>");
document.write("Your Percentage is :" + " " + percentage);






// var name = prompt("Enter your Name");
// var age = prompt("enter age")
// var number = prompt("phone number")
// var address = prompt("address")

// document.write("USER NAME: "  + name )
// document.write("<br> age: " + age)
// document.write("<br> number: " + number )
// document.write("<br> address: " + address )