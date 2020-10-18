<?php 
require './tryConection.php';
$message= array();
$identify=$_POST['id'];
$consulta="SELECT id,file FROM paginas WHERE id='$identify'";
$execute=mysqli_query($conn, $consulta);
mysqli_set_charset($conn,"utf8");
if($execute){
  $row=mysqli_fetch_array($execute);
  $info=$row['file'];
  $message['res']=$info;
}else{
  $message['res']='error';
}
$message=json_encode($message);
echo $message;
?>