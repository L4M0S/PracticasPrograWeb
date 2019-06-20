function fifelse()
{
	var aprobados=0;
	var reprobados=0;
	var estudiante=1;
	var resultado;

	while(estudiante<=10)
	{
		resultado=window.prompt("Escribe el resultado (1=aprobado,2=reprobado","0");

		if(resultado=="1")
			aprobados=aprobados+1;
		else
			reprobados=reprobados+1;

		estudiante=estudiante+1;
	}

	document.writeln("<h1>Resultado del examen<h1>");
	document.writeln("<p>Aprobados: "+aprobados+"; Reprobados: "+reprobados+"</p>");

	if(aprobados>8)
		document.writeln("<p>Bono para el instructor</p>")
}

function fswitch()
{
	var seleccion;
	var etiquetainicial;
	var etiquetafinal;
	var entradavalida=true;
	var tipolista;

	seleccion=window.prompt("Selecciona un tipo de estilo de lista:\n"+"1 (numerada), 2 (con letras), 3 (numeros romanos)", "1");

	switch(seleccion)
	{
		case "1":
			etiquetainicial="<ol>";
			etiquetafinal="</ol>";
			tipolista="<h2>Lista numerada</h2>";
			break;
		case "2":
			etiquetainicial="<ol style='list-style-type:upper-alpha'>";
			etiquetafinal="</ol>";
			tipolista="<h2>Lista con letras</h2>";
			break;
		case "3":
			etiquetainicial="<ol style='list-style-type:upper-roman'>";
			etiquetafinal="</ol>";
			tipolista="<h2>Lista con numeros romanos</h2>";
			break;
		default:
			entradavalida=false;
			break;
	}

	if(entradavalida===true)
	{
		document.writeln(tipolista+etiquetainicial);

		for(var i=1;i<=3;++i)
			document.writeln("<li>Elemento de lista "+i+"</li>")

		document.writeln(etiquetafinal);
	}
	else
		document.writeln("Seleccion invalida: "+seleccion);
}

function fwhile()
{
	var contador=1;

	while(contador<=7)
	{
		document.writeln("<p style='font-size:"+contador+"ex'>Tamaño de fuente de html5"+contador+"ex</p>");
		++contador;
	}
}

function ffor()
{
	for(var contador=1;contador<=7;++contador)
		document.writeln("<p style='font-size: "+contador+"ex'> Tamaño de fuente de html5 "+contador+ "ex</p>");
}

function fbreak()
{
	for(var cuenta=1;cuenta<=10;++cuenta)
	{
		if(cuenta==5)
			break;

		document.writeln(cuenta+" ")
	}

	document.writeln("<p>Se interrumpio el ciclo en cuenta="+cuenta+"</p>");
}

function fcontinue()
{
	for(var cuenta=1;cuenta<=10;++cuenta)
	{
		if(cuenta==5)
			continue;

		document.writeln(cuenta+" ")
	}

	document.writeln("<p>Se uso continue para no imprimir el 5</p>");
}