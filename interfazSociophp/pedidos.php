<?php 
$pagina=$_POST['editado'];  
$comment=$_POST['comment'];  
$cliente=$_POST['email'];  
$metodo=$_POST['metodo'];
if($pagina){
  //$mail=$cliente."\nDESEO: ".$comment."\n \n".$pagina."\n \nPago vía: ".$metodo;
  $message['res']='Realiza el pago y listo estaremos en contacto contigo';
  $message['pay']=$metodo;
}
$message=json_encode($message);
echo $message;
?>