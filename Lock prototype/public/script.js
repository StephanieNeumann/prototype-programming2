var socket = null;
if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);
// Making sure all files are loaded before the script runs

// When files are ready this function is runned.
function ready() {
	const url = 'ws://' + location.host + '/ws';
	socket = new ReconnectingWebsocket(url);
	socket.onmessage = function(evt) {
    
    //This function is checking the input data received from the server and generates different output. 
    //If the check box in the toggle switch is checked, the image of a lock is displayed.
    //If the check box is unchecked, the image of an unlocked lock appears instead.
		
    if (evt.data == 'checked') {
			document.querySelector('input[type="checkbox"]').checked = true;
			document.getElementById("lock").style.backgroundImage = "url('assets/padlock_closed.png')";
		}
		if (evt.data == 'unchecked') {
			document.querySelector('input[type="checkbox"]').checked = false;
			document.getElementById("lock").style.backgroundImage = "url('assets/padlock_open.png')";
		}
	};
}

function send(str) {
	socket.send(str);
}


//Listening if the checkbox, in the toggle switch, is checked or not. 
//Then sends the result to the server. 

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');
  
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {

        console.log('Checked');
        send('checked'); //Send data 'checked' to server.
      } else {
       
        console.log('Not checked');
        send('unchecked'); //Send data 'unchecked' to server.

      }
    });
  });