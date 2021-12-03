/* Lightbox */

// variables
let welcome = document.getElementById('enter-btn');
let lightbox = document.getElementById("welcome-box");
let program = document.getElementById("interface");
let username = document.getElementById('user-name');

// hide lightbox when enter is clicked
welcome.addEventListener("click", closeLightbox);

function closeLightbox () {
    console.log(username.value);
    lightbox.classList.add("hide");
    lightbox.classList.remove("show");
    program.classList.remove("hide");

}
/* end lightbox */ 

/* Menu */
// variables
let openBtn = document.getElementById('open-menu');
let closeBtn = document.getElementById('close-menu');
let check = document.getElementById('checkmark');
let online = document.getElementById('online-status');
let offline = document.getElementById('offline-status');
var assistantStatus = false;
let calendarBtn = document.getElementById('show-calendar');
let calendar = document.getElementById('calendar');

// toggle the menu open when the open menu icon is selected 
function openMenu () {
    // document.getElementById('mySidenav').style.width = "200px";
    document.getElementById('mySidenav').classList.remove("hide")
    openBtn.classList.add("hide");
    closeBtn.classList.remove("hide");
    closeBtn.classList.add("show");
}

// toggle the menu closed when close menu icon is selected - not working
function closeMenu () {
    // document.getElementById('mySidenav').style.width = "0";
    document.getElementById('mySidenav').classList.add("hide");
    closeBtn.classList.remove("show");
    closeBtn.classList.add("hide");
    openBtn.classList.remove("hide");
}

// toggle status to online
online.addEventListener("click", onlineStatus);

function onlineStatus() {
    assistantStatus = true;
    console.log("clicked online");
    console.log(assistantStatus);
    

}

// toggle status to offline
offline.addEventListener("click", offlineStatus);

function offlineStatus() {
    assistantStatus = false;
    console.log("clicked offline");
    console.log(assistantStatus);
}

// show calendar
calendarBtn.addEventListener("click", showCalendar);

function showCalendar () {
    calendar.classList.remove("hide");
    program.classList.remove("show");
    program.classList.add("hide");
}

// close calendar


/* end menu functions */

/* chatbox */
// var bot = new RiveScript();

// // Load a directory full of RiveScript documents (.rive files). This is for
// // Node.JS only: it doesn't work on the web!
// bot.loadDirectory("brain").then(loading_done).catch(loading_error);

// // Load an individual file.
// bot.loadFile("brain/testsuite.rive").then(loading_done).catch(loading_error);

// // Load a list of files all at once (the best alternative to loadDirectory
// // for the web!)
// bot.loadFile([
//   "brain/begin.rive",
//   "brain/admin.rive",
//   "brain/clients.rive"
// ]).then(loading_done).catch(loading_error);

// // All file loading operations are asynchronous, so you need handlers
// // to catch when they've finished. If you use loadDirectory (or loadFile
// // with multiple file names), the success function is called only when ALL
// // the files have finished loading.
// function loading_done() {
//   console.log("Bot has finished loading!");

//   // Now the replies must be sorted!
//   bot.sortReplies();

//   // And now we're free to get a reply from the brain!

//   // RiveScript remembers user data by their username and can tell
//   // multiple users apart.
//   let username = "local-user";

//   // NOTE: the API has changed in v2.0.0 and returns a Promise now.
//   bot.reply(username, "Hello, bot!").then(function(reply) {
//     console.log("The bot says: " + reply);
//   });
// }

// // It's good to catch errors too!
// function loading_error(error, filename, lineno) {
//   console.log("Error when loading files: " + error);
// }
/* end chatbox functions*/

