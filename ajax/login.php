<?php
	require_once ('finder_fns.php');
	//pretend they are not empty
	//extract($_POST);
	$action = $_GET['action'];
	if ($action == 'login') {
		$email = stripslashes(trim($_POST['login_email']));
		$password = stripslashes(trim($_POST['login_password']));

		//$md5pass = md5($password); 
		
		try{
			login($email, $password);
			$user_id = get_userid($email);
			$username = get_username($user_id);
				
			$lifeTime = 24 * 3600;
			session_set_cookie_params($lifeTime);
			session_start();
			$_SESSION["valid_user"]=$user_id;
			$_SESSION["username"] = $username;
			
			$arr['success'] = 1;
			$arr['msg'] = 'Success';
			$arr['user'] = $_SESSION['username'];
				
		}
		catch(Exception $e){
			$arr['success'] = 0;
			$arr['msg'] = 'Dismatch';
		}
		//echo "success";
		echo json_encode($arr);
	}
	elseif ($action == 'logout') {
		unset($_SESSION);
		session_start();
		session_destroy();
		echo '1';
	}
	else if($action == 'signup'){
		$firstname = stripslashes(trim($_POST['signup_firstname']));
		$lastname = stripslashes(trim($_POST['signup_lastname']));
		$email = stripslashes(trim($_POST['signup_email']));
		$password = stripslashes(trim($_POST['signup_password']));
		//$repassword = stripslashes(trim($_POST['signup_repassword']));
		
		
		try{
			register($firstname, $lastname, $email, $password);
			$user_id = get_userid($email);
		
			$lifeTime = 24 * 3600;
			session_set_cookie_params($lifeTime);
			session_start();
			$_SESSION["valid_user"]=$user_id;
			$_SESSION["username"] = $firstname." ".$lastname;
				
			$arr['success'] = 1;
			$arr['msg'] = 'Success';
			$arr['user'] = $_SESSION['username'];
		
		}
		catch(Exception $e){
			$arr['success'] = 0;
			$arr['msg'] = 'Dismatch';
		}
		//echo "success";
		echo json_encode($arr);
	}
?>