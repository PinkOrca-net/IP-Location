document.addEventListener('DOMContentLoaded', function() {
	const form = document.querySelector('#ipform');
	const ipAddressInput = document.querySelector('#ipaddress');
	const ipDetailsDiv = document.querySelector('#ipdetails');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		const ip = ipAddressInput.value;

		const xhr = new XMLHttpRequest();

		xhr.open('POST', 'ipdetails.php');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.onload = function() {
			if(xhr.status === 200) {
				ipDetailsDiv.innerHTML = xhr.responseText;
			} else {
				console.log('Request failed. Returned status of ' + xhr.status);
			}
		};

		xhr.send('ip=' + encodeURIComponent(ip));
	});
});
