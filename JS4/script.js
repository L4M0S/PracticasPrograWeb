function fif()
{
	texto=document.getElementById("fif");
	
	var opcion;
	opcion=window.prompt("Escribe el color que quieres (1=rojo,2=verde,3=azul)","0");

	if(opcion==1)	texto.innerHTML = "<h1 class="+"'rojo'"+">ROJO<h1>";
	else if(opcion==2)	texto.innerHTML = "<h1 class="+"'verde'"+">VERDE<h1>";
	else if(opcion==3)	texto.innerHTML = "<h1 class="+"'azul'"+">AZUL<h1>";
}

function ffor()
{
	resultado=document.getElementById("ffor")

	var iteraciones;
	iteraciones=window.prompt("Escribe cuantas iteraciones quieres","0");

	for (var i = 1; i <= iteraciones; i++) 
	{
		resultado.innerHTML = i+"<p id="+i+"></p><br>";
		resultado=document.getElementById(i);
	}
}