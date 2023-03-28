<?php
	if(isset($_POST['ip'])) {
		$ip = $_POST['ip'];
		$url = "http://ip-api.com/json/" . $ip;
		$data = file_get_contents($url);
		$ipdetails = json_decode($data);

		if($ipdetails->status == 'success') {
			echo '<p class="paragraph"><strong>IP Address:</strong> ' . $ipdetails->query . '</p>';
			echo '<p class="paragraph"><strong>Country:</strong> ' . $ipdetails->country . '</p>';
			echo '<p class="paragraph"><strong>State/Province:</strong> ' . $ipdetails->regionName . '</p>';
			echo '<p class="paragraph"><strong>City:</strong> ' . $ipdetails->city . '</p>';
			echo '<p class="paragraph"><strong>ISP:</strong> ' . $ipdetails->isp . '</p>';
		} else {
			echo '<p class="paragraph">No details found for this IP address.</p>';
		}
	}
?>
