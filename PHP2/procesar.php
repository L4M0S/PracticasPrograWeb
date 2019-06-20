<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
	<?php 
		$nombre=$_POST['Nombre'];
		$asunto=$_POST['Asunto'];
		$mensaje=$_POST['Mensaje'];
		$edad=$_POST['Edad'];
		$sexo=$_POST['Sexo'];

		echo "Nombre: "; echo $nombre; echo "<br/>";
		echo "Asunto: "; echo $asunto; echo "<br/>";
		echo "Mensaje: "; echo $mensaje; echo "<br/>";
		echo "Edad: "; echo $edad; echo "<br/>";
		echo "Sexo: "; echo $sexo; echo "<br/>";

		$servername = "localhost";
		$username = "username";
		$password = "password";
		$dbname = "myDB";

		$conn = new mysqli("localhost","root","5266","PrograWeb");

		if ($conn->connect_error) 
		{
   			die("Conexion fallida: " . $conn->connect_error);
   		}
   		echo "Conexion exitosa";

   		$sql = "INSERT INTO guardar (nombre, asunto, mensaje, edad, sexo) VALUES ('$nombre', '$asunto', '$mensaje', '$edad', '$sexo')";

   		if ($conn->query($sql) === TRUE) 
   		{
   			echo "Insercion exitosa";
		}
		else
		{
    		echo "Insercion fallida: " . $sql . "<br>" . $conn->error;
		}

		$sql2 = "SELECT nombre, asunto, mensaje, edad, sexo FROM guardar;";
		$result = $conn->query($sql2);
		
		if ($result->num_rows > 0) 
		{
    		while($row = $result->fetch_assoc())
    		{
        		echo "<br>".$row["nombre"]." ". $row["asunto"]." ". $row["mensaje"]." ". $row["edad"]." ". $row["sexo"];
    		}
		}
		else
		{
    		echo "0 resultados";
		}

		$conn->close();

	?>
</body>
</html>