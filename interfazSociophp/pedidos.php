<?php 
$pagina=$_POST['editado'];  
$comment=$_POST['comment'];  
$cliente=$_POST['email'];  
if($pagina){
  //$message['res']=$cliente."\nDESEO: ".$comment."\n \n".$pagina;
}
$message=json_encode($message);
echo $message;
?>