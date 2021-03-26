<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
require 'Exception.php';
require 'PHPMailer.php';
require 'SMTP.php';

$errors = [];

if(isset($_POST["name"]) && isset($_POST["phone"]) && isset($_POST["email"]))  {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $email = $_POST["email"];

    //I skipped the validation for shorter code
    if(empty($name)) {
        $errors[] = "Name cannot be empty!";
    }

    if(empty($phone)) {
        $errors[] = "Address cannot be empty!";
    }


    if (!empty($errors)) {
        echo json_encode($errors); //Sending back the array of string errors
    } else {
        $mail2 = new PHPMailer();
        $mail2->CharSet = "UTF-8";
        $contentBodyForFirm = '<html><body><div  style="text-align:center; width: 500px; display:block; margin-left: auto; 
        margin-right: auto;"><p style="text-align:center;"><h2>' . $name . ' ' . $phone . '</div></body></html>';

        $mail2->setFrom($email, $name); //Who is sending the message
        $mail2->addAddress("tameoooo13@gmail.com"); //Set who the message is to be sent to
        $mail2->Subject = 'Order';
        $mail2->isHTML(TRUE);
        $mail2->Body = $contentBodyForFirm;
        $mail2->isSMTP();
        $mail2->charSet = "UTF-8";
        $mail2->Host = 'smtp.gmail.com';
        $mail2->SMTPAuth = TRUE;
        $mail2->SMTPSecure = 'tls';
        $mail2->Username = "190103483@stu.sdu.edu.kz";
        $mail2->Password = 'tamer123';
        $mail2->Port = 587;
        if(!$mail2->Send())
        {
            echo "Something went wrong!";
        }
        echo json_encode([]); //Sendning back an empty array

    }
}

?>