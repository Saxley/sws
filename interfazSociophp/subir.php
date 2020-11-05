<?php
require './tryConection.php';
$message=array();
$archivo=$_FILES['archivito']['tmp_name'];
$type=$_FILES['archivito']['type'];
$name=$_FILES['archivito']['name'];
$size=$_FILES['archivito']['size']; 
$img=$_POST['imagen'];
$precio;  
if(!empty($archivo)){  
 if(empty($img)){
   switch($name[0]){
       case 'A': 
           $precio=9;
           break;
       case 'B':
           $precio=11;
           break;
       case 'C': 
           $precio=14;
           break; 
       case 'D': 
           $precio=20;
           break; 
        case 'E': 
           $precio=25;
           break;
   }
    $file=fopen($archivo, "r");
    $fileFinish=fread($file, $size);
    $fileFinish=addslashes($fileFinish);
    fclose($file);
    mysqli_set_charset($conn, "utf8");
    $insertar="INSERT INTO paginas(id,nombre,precio,file) VALUES(0,'$name','$precio','$fileFinish')";
    $ejecucion=mysqli_query($conn,$insertar);
   // if(mysqli_affected_rows($conn)>0){ 
   if($ejecucion){
        $message['res']='Script Almacenado con exito';
      }

  }else{  
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
/*if(!empty($archivo)){
   if($name[0]=="A"){ 
    $message['res']="recibido";
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
   if(!empty($img)){  
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
  mysqli_close($conn);
  $message=json_encode($message);
  echo $message;*/
?>