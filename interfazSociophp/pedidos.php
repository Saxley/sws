<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'phpMailer/src/Exception.php';
require 'phpMailer/src/PHPMailer.php';
require 'phpMailer/src/SMTP.php'; 
class soporte {
  public function __construct($message,$email,$metodo,$comment,$destino) {
    $envio=$this->message($email, $message, $metodo,$comment,$destino);
    return $envio;
  }
  public function message($contacto, $freeMessage, $metodo, $comment,$email){
      $COMPANY = 'foxyGamerCompany';
      $Pass = 'nhqcqlfqbmvvmbko';
      if(empty($email)){
        $email = 'luisarriagacarranza@gmail.com';
        $asunto = "NUEVO PEDIDO de $contacto";
      }else{ 
        $metodo="FoxyCommunity";
        $asunto = "Esperamos tu comprobante de pago";
        $freeMessage="Hola $email , para empezar a trabajar con tu pagina web, por favor envianos el comprobante de tu pago. Si lo realizaste vía Paypal puedes ir a tus movimientos posteriormente a tus pagos realizados, cuando encuentres el nuestro tomale captura de pantalla y reenvialo a este email.";
        $comment="<i>Por tu atención y tu preferencia muchas gracias. <br><b>Estaremos en contacto</b>.</i>";
      }
    $mail = new PHPMailer();

    $mail->isSMTP();
    $mail->SMTPAuth = true;
    $mail->SMTPSecure = 'tls';
    $mail->Host = 'smtp.gmail.com';
    $mail->Port = '587';
    $mail->Username = $COMPANY.'@gmail.com';
    $mail->Password = $Pass;


    $mail->setFrom($COMPANY.'@gmail.com', 'FOXY COMMUNITY');
    $mail->addAddress($email , $metodo);
    $mail->Subject = $asunto;
    $mail->isHTML(true);
    $mail->Body = $freeMessage."<br>".$comment;
    $mail->CharSet = 'UTF-8';
    if ($mail->send()) {
      return true;
    } else {
      return false;
    }
  } 
} 

$pagina=$_POST['editado'];  
$comment=$_POST['comment'];  
$cliente=$_POST['email'];  
$metodo=$_POST['metodo'];
$support= new soporte($pagina,$cliente,$metodo,$comment,'');
$supportCliente= new soporte($pagina,$cliente,$metodo,$comment,$cliente);
if($pagina){ 
  $message['res']='Realiza el pago y listo estaremos en contacto contigo';
  $message['pay']=$metodo;
}
$message=json_encode($message);
echo $message;
?>