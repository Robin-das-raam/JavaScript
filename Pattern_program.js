var sum = 0;
var i = 1;

while(i<=100)
{
    if (i%3 == 0 || i%5 == 0){
        sum = sum + i
        }
    i = i+1;


}
document.write("sum=",sum);

document.write("</br>","<h1>1st loop program</h1>","</br>")

/*

*
* *
* * *
* * * *
* * * * *

*/

for (var i=1;i<=5;i++){
for(var j=1;j<=i;j++){
document.write("*",end = " ");
}
document.write("</br>")
}

//2nd pattern program
/*
* * * * *
* * * *
* * *
* *
*

*/
document.write("</br>","<h1>2nd loop program</h1>","</br>")

for (var i=5;i>=0;i--){
for (var j=1;j<=i;j++){
document.write("*",end = " ");
}
document.write("</br>")
}

//3rd pattern program
/*
*
* *
* * *
* * * *
* * * * *
* * * *
* * *
* *
*

*/

document.write("</br>","<h1>3rd loop program</h1>","</br>")
for(var m=1;m<=5;m++){
for(var n=1;n<=m;n++){
document.write("*",end = " ");
}
document.write("</br>")
}
for(var m=4;m>=0;m--){
for(var n=1;n<=m;n++){
document.write("*",end = " ")
}
document.write("</br>")
}

//4th pattern program
/*
1
2 2
3 3 3
4 4 4 4
*/

document.write("</br>","<h1>4th loop program</h1>","</br>")
for(var i = 1;i<=4;i++){
for(var j = 1;j<=i;j++){
document.write(i,end = " ")
}
document.write("</br>")
}

//5th pattern program
/*
1
1 2
1 2 3
1 2 3 4
*/

document.write("</br>","<h1>5th loop program</h1>","</br>")
for(var i = 1;i<=4;i++){
for(var j = 1;j<=i;j++){
document.write(j,end = " ")
}
document.write("</br>")
}
