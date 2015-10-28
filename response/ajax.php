<?php

if ($_GET['comment']) {
/*
name: name,
            email: email,
            telefono: telefono,
            ciudad: ciudad,
            reason: reason,
            textarea:textarea
 *  */
    $nombre = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $ciudad = $_POST['ciudad'];
    $reason = $_POST['reason'];
    $textarea = $_POST['textarea'];

    $header = 'From: ' . $email . "\r\n";
    $header.= "Mime-Version: 1.0 \r\n";
    $header.= "Content-Type: text/plain";

    $mensaje = "Este mensaje fue enviado por: " . $nombre . "\r\n";
    $mensaje .= "Teléfono: " . $telefono . "\r\n";
    $mensaje .= "Ciudad: " . $ciudad . "\r\n";
    $mensaje .= "Motivo: " . $reason . "\r\n";
    $mensaje .= "Email: " . $email . "\r\n";
    $mensaje .= "Mensaje: " . $textarea . "\r\n";
    $mensaje .= "Enviado el " . date('d/m/Y', time());

    //$para = 'sistemas@imporpasac.com';
    $para2 = 'marketing@paez.com.pe';

    $asunto = 'Formulario de Contacto de Paez Perú';

    //mail($para, utf8_decode($asunto), utf8_decode($mensaje), $header);
    $valor = mail($para2, utf8_decode($asunto), utf8_decode($mensaje), $header);

    $data = array();
    $data[0]['success'] = $valor;

    echo json_encode($data);
}


