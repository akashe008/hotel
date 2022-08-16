var x=[0,0,0,0,0,0];
var y=[0,0,0,0,0,0];
var price=[130,160,180,220,110,160];
var na=["Veg Biriyani","Paneer Biriyani","Chicken Biriyani","Mutton Biriyani","Veg Fried-Rice","Chicken Fried-Rice"];
var item=["vb","pb","cb","mb","vf","cf"];
var pi=["vbi","pbi","cbi","mbi","vfi","cfi"];
var pq=["vbq","pbq","cbq","mbq","vfq","cfq"];
var pp=["vbp","pbp","cbp","mbp","vfp","cfp"];
var t;
var c=0;
function inc(id,n){
	x[n]++;
	document.getElementById(id).value=x[n];
	if(x[n]===1)
		y[n]=1;
}

function dec(id,n){
	if(x[n]!=0)
	{
		x[n]--;
		document.getElementById(id).value=x[n];
		if(x[n]===0)
			y[n]=0;
	}
}

function reset(){
	c=0;
	x=[0,0,0,0,0,0];
	for(var i=0;i<x.length;i++)
		document.getElementById(item[i]).value=x[i];
	location.reload();
}

function placeorder(){
	c=0;
	t=0;
	if(y.includes(1))
	{
	for(var i=0;i<y.length;i++)
	{
		if (y[i]==1) {
			document.getElementById(pi[c]).innerHTML=na[i];
			document.getElementById(pq[c]).innerHTML=x[i];
			document.getElementById(pp[c]).innerHTML="Rs."+price[i]*x[i];
			t+=price[i]*x[i];
			c++;
		}
	}
	document.getElementById("total").innerHTML="Total:Rs."+t;
}
}

function final(){
		if(t>0)
		location.replace("details.html");
}