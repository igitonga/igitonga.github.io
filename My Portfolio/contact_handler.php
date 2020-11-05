<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$email_subject = "Visitor on My Portfolio";
$email_body = "Username: ".$name ."/n".
              "Email: ".$email ."/n".
              "Subject: ".$subject ."/n".
              "Message: ".message ."/n";

$to = "iangitonga47@gmail.com";

mail($to, $email_subject, $email_body);

header('location: index_html');

?>