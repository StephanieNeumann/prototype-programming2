# Using websockets for syncing graphical user interfaces and user input on different devices

This javascript project shows how to send a checkbox input from a client to a server and have it distributed to every other client connected to the same server. The interaction with the graphical user interface and the change of its appearence is synced to all devices that use the url in their web browser. I

The project consists of a "server" script (app.js) that runs in the Node.js environment, and "client" code in the public folder.

See a hosted version of this on [Glitch](https://glitch.com/edit/#!/prototype-programming2?path=public/script.js:1:0)

# Setup 

Download the master.zip file and unpack it. Open npm command line and change directory to the location of folder.

`$ cd/YOUR PATH/prototype-programming2/Lock prototype`

Install node, the necessary packages from npm.

`$ npm install`


# Running

Once set up, you can boot up your server with

`$ npm start`

If running successfully the portnumber will show in the command line.

(It will continue running. To stop it again, press CTRL+C (PC) or CMD+C (Mac))

Open new tab in command line and type: 

`$ ngrok http PORTNUMBER`

Copy the http url that appears and run it in your web browser(s). 


# Uses

* [reconnecting-websocket](https://github.com/pladaria/reconnecting-websocket) wrapper (v3.2.2)

# Read more

* [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
* [express-ws](https://www.npmjs.com/package/express-ws)

