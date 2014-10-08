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
	
	

 function schleife()
	{
	lebensenergie -= 1;

	var a = document.getElementById("test");
	a.innerHTML = lebensenergie;


	window.setTimeout("schleife()", 20);
	}