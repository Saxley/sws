<?php
require './tryConection.php';
$message=array();
$archivo=$_FILES['archivito']['tmp_name'];
$type=$_FILES['archivito']['type'];
$name=$_FILES['archivito']['name'];
$size=$_FILES['archivito']['size']; 
$img=$_POST['imagen'];
$precio;  
if($archivo!="none"){
   if($name[0]=="A"){
      $precio=9;
      $file=fopen($archivo, "r");
      $fileFinish=fread($file, $size);
      $fileFinish=addslashes($fileFinish);
      fclose($file);
      mysqli_set_charset($conn, "utf8");
      $insertar="INSERT INTO paginas(id,nombre,precio,file) VALUES(0,'$name','$precio','$fileFinish')";
      $ejecucion=mysqli_query($conn,$insertar);
      if(mysqli_affected_rows($conn)>0){
        $message['res']="Script Almacenado con exito";
      }else{
        $message['res']="No se pudo almacenar";
      }
    }  

  if($img!=null){  
      $dirDestany=$_SERVER['DOCUMENT_ROOT'].'/upload/';
      move_uploaded_file($archivo,$dirDestany.$name); 
      $sql="UPDATE paginas SET imagenMuestra='$name' WHERE nombre='$img'";
      $ejecucion=mysqli_query($conn,$sql); 
      if($ejecucion){
      $message['res']='Imagen almacenada'; 
      }
  }
}else{
   $message['res']="No se puede almacenar";
}
  $message=json_encode($message);
  echo $message;
  mysqli_close($conn);
?>