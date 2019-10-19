<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    require_once getcwd() . '../packages/PHPMailer/src/PHPMailer.php';
    require_once getcwd() . '../packages/PHPMailer/src/SMTP.php';
    require_once getcwd() . '../packages/PHPMailer/src/Exception.php';

    class MailSender {
        private $_mail;
        private $_config;
    
        public function __construct() {
            $this->_mail = new PHPMailer(true);
            $this->_config = require(getcwd() . '../config/api.config.php');
        }

        public function __destruct() {}

        public function sendMail($name, $email, $phone, $inquiry) {
            if(is_null($this->_mail)) {
                $this->_mail = new PHPMailer(true);
            }

            try {
                $this->_mail->SMTPDebug     = SMTP::DEBUG_OFF;
                $this->_mail->isSMTP();
                $this->_mail->Host          = $this->_config['HOST'];
                $this->_mail->SMTPAuth      = true;
                $this->_mail->Username      = $this->_config['USERNAME'];
                $this->_mail->Password      = $this->_config['PASSWORD'];
                $this->_mail->SMTPSecure    = PHPMailer::ENCRYPTION_STARTTLS;
                $this->_mail->Port          = $this->_config['PORT'];

                $this->_mail->setFrom($this->_config['SENDER_EMAIL'], $this->_config['SENDER_NAME']);
                $this->_mail->addAddress($this->_config['RECIEV_EMAIL'], $this->_config['RECIEV_NAME']);

                $this->_mail->isHTML(true);
                $this->_mail->Subject   = $this->_config['EMAIL_SUBJECT'];
                $this->_mail->Body      =    '<strong>Full Name: </strong>'.$name .'<br />'
                                        .'<strong>Email: </strong>'.$email.'<br />'
                                        .'<strong>Phone: </strong>'.$phone.'<br />'
                                        .'<strong>Inquiries: </strong>'.$inquiry.'<br />';
                
                $this->_mail->send();
                
                return true;
            } catch(Exception $e) {
                return false;
            }
        }
    }
?>