<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer((true));
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language/');
    $mail->isHTML(true);

    //от кого
    $mail->setFrom('info@mastertseh.ru', 'Письмо с сайта');
    //кому отправить
    $mail->addAddress('yule444ka1234@mail.ru');
    //тема письма
    $mail->Subject = 'Привет!';

    //тело
    $body = '<h1>Письмо</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
    }



    $mail->Body = $body;

    //отправка
    if (!$mail->send()){
        $message = 'Ошибка';

    }else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>