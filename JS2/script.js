document.writeln("<h1>Bienvenido a la programacion en JAVASCRIPT</h1>");

window.alert("Bienvenido a la programacion en JAVASCRIPT")

var cadena;
cadena=window.prompt("Escribe");
document.writeln("cadena: "+cadena);

var cadena1,cadena2;
var numero1,numero2;
var suma;
cadena1=window.prompt("primer numero");
cadena2=window.prompt("segundo numero");
numero1=parseInt(cadena1);
numero2=parseInt(cadena2);
suma=numero1+numero2;
document.writeln("<p>La suma de "+numero1+"+"+numero2+" es igual a: "+suma);