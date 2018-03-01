

var num=6;
var colors=getRandomcolors(num);
var displaycolor=document.getElementById("displaycolor");

var pickedcolor=colorpicked();
var squares=document.querySelectorAll(".square");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var resetbtn=document.getElementById("reset");
var easybtn=document.getElementById("easy");
var hardbtn=document.getElementById("hard");



resetbtn.addEventListener("click",reset);
hardbtn.addEventListener("click",function()
{
hardbtn.classList.add("selected");
easybtn.classList.remove("selected");
num=6;
colors=getRandomcolors(num);
pickedcolor=colorpicked();
displaycolor.textContent=pickedcolor;

for (var i = 0;i<squares.length;i++)
{

	squares[i].style.backgroundColor=colors[i];
squares[i].style.display="block";
	
}

});
easybtn.addEventListener("click",function () {
	easybtn.classList.add("selected");
hardbtn.classList.remove("selected");
num=3;
colors=getRandomcolors(num);
pickedcolor=colorpicked();
displaycolor.textContent=pickedcolor;
for (var i = 0;i<squares.length;i++)
{
if(colors[i])
	squares[i].style.backgroundColor=colors[i];
else
squares[i].style.display="none";
	
}

	
})



for (var i = 0;i<squares.length;i++) {
	squares[i].style.backgroundColor=colors[i];
	displaycolor.textContent=pickedcolor;
	squares[i].addEventListener("click",function()
	{
		var clickedcolor=this.style.backgroundColor;
		if(clickedcolor===pickedcolor)
		{
         h1.style.backgroundColor=pickedcolor;
         changecolor(pickedcolor);
       message.textContent="YOU ARE RIGHT";
     
   
 
         resetbtn.textContent="Play Again?";
         
       
         	}
		else
		{
			message.textContent="Try Again";
			this.style.backgroundColor="#232323";
		}

	});

}







function changecolor(color)
{
for (var i = 0;i<squares.length;i++) {
	squares[i].style.backgroundColor=color;
}
}





function colorpicked()
{
	var pick=Math.floor(Math.random()*colors.length);
	return colors[pick];
}




function getRandomcolors(num)
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr[i]=randomcolors();
	}



	return arr;
}

function randomcolors()
{
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);
	

         return "rgb("+r+", "+g+", "+b+")";

}
function reset()
{
colors=getRandomcolors(num);
pickedcolor=colorpicked();
message.textContent=" ";




for (var i = 0;i<squares.length;i++)
{
	squares[i].style.backgroundColor=colors[i];
	displaycolor.textContent=pickedcolor;
	resetbtn.textContent="New Colors";
	h1.style.backgroundColor="#ff9933";
}
}
