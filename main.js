var array21=[];

function submit()
{
var1=document.getElementById("name1").value;
var2=document.getElementById("name2").value;
var3=document.getElementById("name3").value;
var4=document.getElementById("name4").value;
array21.push(var1);
array21.push(var2);
array21.push(var3);
array21.push(var4);
document.getElementById("names").innerHTML=array21;
document.getElementById("submit").style.display="none";
document.getElementById("sort").style.display="inline-block";
}
function sort()
{
array21.sort();
document.getElementById("names").innerHTML=array21;
}