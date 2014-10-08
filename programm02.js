var lebensenergie = 100;
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
	


function game_over()
	{
	var entscheidung = confirm("GAME OVER! Neues Spiel?");
	if (entscheidung == true) 
		{
		lebensenergie = 100;
		} 	
	}


 // UNSERE HAUPTLOOP

 function schleife()
	{
	lebensenergie -= 1;

	var a = document.getElementById("test");
	a.innerHTML = lebensenergie;


	if ( lebensenergie == 0)
		{
	    game_over();
		}



	window.setTimeout("schleife()", 20);
	}
	


//////////////////////

$( document ).ready(function() {

$("#start").click(function(){
	schleife();
});


});





