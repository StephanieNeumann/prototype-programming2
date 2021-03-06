var socket = null;
if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);
// Making sure all files are loaded before the script runs

// When files are ready this function is runned.
function ready() {
	const url = 'ws://' + location.host + '/ws';
	socket = new ReconnectingWebsocket(url);
	socket.onmessage = function(evt) {
    
    //This function is checking the input data received from the server and generates output in the web client. 		
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


//Listening if the checkbox is checked or not. Then sends the result to the server. 

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
