document.addEventListener('DOMContentLoaded', () => {
	const form = document.querySelector('#ipform');
	const ipAddressInput = document.querySelector('#ipaddress');
	const ipDetailsDiv = document.querySelector('#ipdetails');

	$.ajax('https://api.ipify.org/?format=text', {
		type: 'GET',
		success: data => ipAddressInput.value = data
	});

	form.addEventListener('submit', event => {
		event.preventDefault();
		const ip = ipAddressInput.value;
		ipAddressInput.value = '';

		$.ajax(`http://ip-api.com/json/${ip}`, {
			type: 'GET',
			success: data => {
				let result = ''

				if (data.status === "success") {
					result += `<p class="paragraph"><strong>IP Address:</strong> ${data.query}</p>`;
					result += `<p class="paragraph"><strong>Country:</strong> ${data.country} (${data.countryCode})</p>`;
					result += `<p class="paragraph"><strong>State/Province:</strong> ${data.regionName}</p>`;
					result += `<p class="paragraph"><strong>City:</strong> ${data.city}</p>`;
					result += `<p class="paragraph"><strong>ISP:</strong> ${data.isp}</p>`;
				} else
					result += `<p class="paragraph">No details found for this IP address.</p>`;
				
				ipDetailsDiv.innerHTML = result;
			}
		});
	});
});
