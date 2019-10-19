<?php
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json; charset=UTF-8');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Max-Age: 3600');
    header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

    require_once getcwd() . './utils/MailSender.php';

    $rawData = file_get_contents('php://input');
    $data = json_decode($rawData);
    
    if(!empty($data->name) && !empty($data->email) && !empty($data->phone) && !empty($data->inquiry)) {
        $name = $data->name;
        $email = $data->email;
        $phone = $data->phone;
        $inquiry = $data->inquiry;

        $mailSender = new MailSender();
        $flag = $mailSender->sendMail($name, $email, $phone, $inquiry);

        if($flag) {
            echo json_encode(array('Code' => 201, 'Message' => 'Success!'));
        } else {
            echo json_encode(array('Code' => 503, 'Message' => 'Service unavailable!'));
        }
    } else {
        echo json_encode(array('Code' => 400, 'Message' => 'Bad request!'));
    }
?>