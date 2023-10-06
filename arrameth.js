//https://www.youtube.com/watch?v=aao_1FxJIdU&list=PLtFbQRDJ11kEbVF23tMjl_NuTbTvff6OH&index=39
// --toString()[transform array to string]
// --join("seperator btween words" any symbol) join()also transform array to string
// var arr = ["michel", "rita", "josephine", "amal"];
// var str = arr.toString();
// document.write(str +"<br>");
// //output: michel,rita,josephine,amal
// document.write(typeof (str));
//output: michel,rita,josephine,amal
//string
// var arr = ["michel", "rita", "josephine", "amal"];
// var str = arr.join(" and ");
// document.write(str);
//output:michel and rita and josephine and amal
var arr = ["michel", "rita", "josephine", "amal"];
var str = arr.join(" | ");
document.write(str);


