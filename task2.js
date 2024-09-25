//question 1
var s="i am talluri mahesh";
var r=s.slice(5,12).toUpperCase();
console.log(r);

//question 2
var s1="mahesh";
var r1=s1.toUpperCase().length;
console.log(r1);

//question 3
var s2="mahesh";
var r2=s2.charCodeAt(3);
console.log(r2);

//question 4
var s3="      virat kohli      ";
var r3=s3.trim().slice(1,4);
console.log(r3);

//question 5
var s4="MAHESH";
var s5="TALLURI";
var r4=s4.concat(" ",(s5.toLowerCase()));
console.log(r4);

//question 6
var s6="        Rohith Sharma";
var r5=s6.trimStart().slice(1)
console.log(r5);

//question 7
s7="Murthy";
var r6=s7.charAt(3).toUpperCase();
console.log(r6);

//question 8
var s8="Talluri      ";
var r7=s8.trimEnd().concat(" ","Koteswaramma");
console.log(r7);

//question 9
var i="    HelloWorld    ";
var r8=i.trim().toUpperCase().slice(1,6)
console.log(r8);
