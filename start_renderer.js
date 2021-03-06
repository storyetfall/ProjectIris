// RENDER FOR INDEX.HTML

var ipc = require("electron").ipcRenderer;

var connectedDiv = $("#connectedDiv");
var disconnectedDiv = $("#disconnectedDiv");

$(".submit-btn").click(function () {
    ipc.send("nav-from-start");
});


//////////////////////////
// All Methods.
////////////////////
function onConnectionStateChanged(event, connectionState) {
    // Update the DOM.
    console.log(connectionState);
    if (connectionState) {
        connectedDiv.show();
        disconnectedDiv.hide();
    }
    else {
        connectedDiv.hide();
        disconnectedDiv.show();
    }
}

//////////////////////////////
// Add all event listener's
////////////////////////////

ipc.on("connection_state_changed", onConnectionStateChanged);



//////////////////////////
// Initialization code.
onConnectionStateChanged(null, false);


