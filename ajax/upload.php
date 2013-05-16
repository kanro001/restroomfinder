<?php

	require_once ('finder_fns.php');


	if(!file_exists($_FILES['finder_upload_file']['name'])){
		$allowedExts = array("jpg","jpeg","gif","png","JPG");
		//$extension = end(explode(".", $_FILES["finder_upload_file"]["name"]));
		$bits = explode(".", $_FILES["finder_upload_file"]["name"]);
		$extension = end($bits);
		if ((($_FILES["finder_upload_file"]["type"] == "image/JPEG")||
				($_FILES["finder_upload_file"]["type"] == "image/JPG")||
				($_FILES["finder_upload_file"]["type"] == "image/gif")||
				($_FILES["finder_upload_file"]["type"] == "image/jpg")||
				($_FILES["finder_upload_file"]["type"] == "image/jpeg")||
				($_FILES["finder_upload_file"]["type"] == "image/png"))&&
				($_FILES["finder_upload_file"]["size"]/1024 < 200000000)&&
				in_array($extension, $allowedExts)){
			if ($_FILES["finder_upload_file"]["error"] > 0){
				echo "Error: " . $_FILES["finder_upload_file"]["error"] . "<br>";
			}
			else
			{	$target_path="images/";
			$target_path=$target_path.basename( $_FILES['finder_upload_file']['name']);
			move_uploaded_file($_FILES['finder_upload_file']['tmp_name'],$target_path);
			echo "<img src='{$target_path}' width='100px' height='100px'/><br><br><br>";
			}
		}
	}
	if(isset($_POST["finder_upload_gender"]))
		$upload_gender = $_POST["finder_upload_gender"];
	if(isset($_POST['finder_upload_name']))
		$upload_name = $_POST['finder_upload_name'];
	if(isset($_POST['finder_upload_addr']))
		$upload_addr = $_POST['finder_upload_addr'];
	if(isset($_POST['finder_upload_area']))
		$upload_area = $_POST['finder_upload_area'];
	if(isset($_POST['finder_upload_city']))
		$upload_city = $_POST['finder_upload_city'];
	if(isset($_POST['finder_upload_longitude']))
		$upload_longitude = $_POST['finder_upload_longitude'];
	if(isset($_POST['finder_upload_latitude']))
		$upload_latitude = $_POST['finder_upload_latitude'];
	if(isset($_POST['finder_upload_phone']))
		$upload_phone = $_POST['finder_upload_phone'];

	if($upload_gender == "Both")
		$upload_gender = 0;
	elseif($upload_gender == "Male")
		$upload_gender = 1;
	elseif($upload_gender == "Female")
		$upload_gender = 2;
	else
		$upload_gender = 3;
	$date=date('Y-m-d H:i:s');
	
	upload($upload_name, $upload_addr, $upload_area, $upload_city, $upload_gender, $target_path, $upload_phone, $upload_longitude, $upload_latitude);
	
	
	header("Location: ../index.php");
	
?>