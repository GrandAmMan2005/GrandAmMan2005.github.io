let page = 0;

// Query the API with the current parameters/modifiers
function queryAPI() {
	
	const nameStartsWith = document.getElementById("starts-with").value;
	//Pulls One Result per Character.
    let results = 1;
	
		if (nameStartsWith.length > 0) {
			nameStarts = `nameStartsWith=${nameStartsWith}`;
		} else {
			nameStarts = ``;
		}
		const apiBaseUrl = "http://gateway.marvel.com/v1/public/";
		const pubKey = "118da95b1ac1fc70344b55789bb21c03";
		const privKey = "7c9fc83aa1b089a7789a4fc94804998afb96dde3";  
		let ts = new Date().getTime();
		let hash = CryptoJS.MD5(ts + privKey + pubKey).toString();
		const method = "characters";
		let modifiers = `?${nameStarts}&limit=${results}&offset=${page}`;
		$.ajax({
			type: "GET",
			url: apiBaseUrl + method + modifiers,
			data: {
				apikey: pubKey,
				ts: ts,
				hash: hash
			},
			dataType: "json",
			contentType: "application/json"
		})
		.then(function (data) {
			displayData(data);
		},
		function (error) {
			alert('failed! ' + error.responseText);
		});

// Display the returned data
function displayData(data) {
	myData = data.data.results;
	var dataRow = document.getElementById('data-row');
	var rowData = ``;

	for (var i = 0; i < myData.length; i++) {
		var name = myData[i].name;
        var id = myData[i].id;
		var description = myData[i].description;
		var thumbnail = myData[i].thumbnail.path;
		var extension = myData[i].thumbnail.extension;
		// Only show characters that have an image thumbnail
		if (!myData[i].thumbnail.path.includes('image_not_available')) {
			rowData += `
				<div class="column">
					<div class="card">
						<div class="card-section">
                            <h5>Character ID ${id}</h5>
							<img src="${thumbnail}.${extension}">
						</div>
						<div class="card-section">
							<h4>${name}</h4>
							<p>${description}</p>
							
						</div>
					</div>
				</div>
			`;
		}
	}
	dataRow.innerHTML = rowData;
}
}