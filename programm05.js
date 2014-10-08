var lebensenergie = 100;
var erfahrung     = 0;
var level         = 1;

function verdoppeln()
{
lebensenergie *= 2;	
console.log(lebensenergie);

var a = document.getElementById("test");
}


function automat(val)
	{
	val *= 2;	
		
	console.log(val);
	return val;	
	
	}
	


function treffer()
	{
	erfahrung += 1;	
	
	var a = document.getElementById("erfahrung");
	a.innerHTML = erfahrung;
	}



function game_over()
	{
	var entscheidung = confirm("GAME OVER! Neues Spiel?");
	if (entscheidung == true) 
		{
		lebensenergie = 100;
		erfahrung     = 0;
		
		
		var a = document.getElementById("energie");
		a.innerHTML = lebensenergie;
		
		var b = document.getElementById("erfahrung");
		b.innerHTML = erfahrung;		
		
		} 	
	}



function levelwechsel()
	{
	level += 1;
	
	var entscheidung = confirm("GLÜCKWUNSCH - Du hast Level " + level + " erreicht. Weitermachen?");
	
	if (entscheidung == true) 
		{
		lebensenergie = 100;
		erfahrung     = 0;
		
		
		var a = document.getElementById("energie");
		a.innerHTML = lebensenergie;
		
		var b = document.getElementById("erfahrung");
		b.innerHTML = erfahrung;		

		var c = document.getElementById("level");
		c.innerHTML = "LEVEL " + level;	

		
		} 	
	}



function zufallsposition()
	{
	var x = Math.random() * 100 + "%";
	var y = Math.random() * 100 + "%";
	
	$("#target").css({
			left: x,
			top:  y,		
			})		
	
	
	var el = document.getElementById("target");
	TweenMax.to(el, 0,  {scale: 1});	
	TweenMax.to(el, 1,  {scale: 3});		
				
	}


function bewegung()
	{
	zufallsposition();
	window.setTimeout("bewegung()", 1320);
	} 


 // UNSERE HAUPTLOOP

 function schleife()
	{
	lebensenergie -= 0.05;
	lebensenergie = lebensenergie.toFixed(2);

	var a = document.getElementById("energie");
	a.innerHTML = lebensenergie;


	if ( lebensenergie == 0)
		{
	    game_over();
		}


	if (erfahrung == 3)
		{
		levelwechsel();	
		}


	window.setTimeout("schleife()", 20);
	}
	


//////////////////////

$( document ).ready(function() {

$("#start").click(function(){
	schleife();
	bewegung();
});

$("#target").click(function(){
	treffer();
});



});





