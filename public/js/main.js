//For now, put all JavaScript in here

//=======================================
// CLEARLY LABEL JAVASCRIPT PER PUG FILE
//=======================================

document.addEventListener('DOMContentLoaded', function() {

	//=================
	// INDEX
	//=================

	$('#signup-form').submit(function(event) {
		event.preventDefault();
		$.post('/signup',
			$('#signup-form').serialize(),
			function(data) {
				if (data.success) {
					//Success
				} else {
					//Error
				}
			});
	});

	$('#login-form').submit(function(event) {
		event.preventDefault();
		$.post('/login',
			$('#login-form').serialize(),
			function(data) {
				if (data.success) {
					//Success
				} else {
					//Error
				}
			});
	});

	//=================
	// TEAM SELECT
	//=================

	//Code here

	//=================
	// TOURNAMENT VIEW
	//=================

	//Code here
});

//==================
// HELPER FUNCTIONS
//==================
