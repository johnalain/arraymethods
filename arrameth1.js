https://www.youtube.com/watch?v=Z4BicHk_FLY&list=PLtFbQRDJ11kEbVF23tMjl_NuTbTvff6OH&index=40
// array methods
// --Push()[add element at the end of array][u can add as much elements as you need]
// --Pop()[eliminate from endof array]
var arr = ["car1", "car2", "car3"];
 document.getElementById("demo").innerHTML = arr;
 //arr.pop();//eliminate last element "car3"
 //document.getElementById("demo").innerHTML = arr.pop();
//output: car1,car2,car3
// arr.push("car4","car5","car6");
// document.getElementById("demo1").innerHTML = arr;
//output:car1,car2,car3,car4
// alert(arr.push("car4"));
//this function elininate last element every time you click the button
 function popElement(){
     arr.pop();
     document.getElementById("demo").innerHTML=arr;
 }
// arr.pop();
// //output:car1,car2
//document.getElementById("demo").innerHTML = arr;