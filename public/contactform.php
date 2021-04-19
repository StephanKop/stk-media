<?php 

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $mailFrom = "info@stk-media.nl";
    $mailSend = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $mailTo = "stephan.kop@outlook.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$mailSend.".\n\n".$message;

    mail($mailTo, $subject, $txt, $headers, "-f".$mailSend);
    header("Location: /contact");
}