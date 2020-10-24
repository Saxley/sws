<?php 
require './tryConection.php';
$message= array();
$identify=$_POST['id'];
$img=$_POST['imagen']; 
if($img!='null'){
$consulta="SELECT id,imagenMuestra FROM paginas WHERE id='$identify'";
}else if($identify!=null){
$consulta="SELECT id,file FROM paginas WHERE id='$identify'"; 
}
$execute=mysqli_query($conn, $consulta);
mysqli_set_charset($conn,"utf8"); 
if($execute){
  $row=mysqli_fetch_array($execute); 
  if($img!='null'){ 
  if($row['imagenMuestra']!=null){
  $info=$row['imagenMuestra']; 
  }else{
    $info='outService.png';
  }
  }else if($identify!=null){
  $info=$row['file'];
  }
  $message['res']=$info; 
}else{
  $message['res']='error';
}
$message=json_encode($message);
echo $message;
?>