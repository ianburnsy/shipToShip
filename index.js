// can use any node synax in here.
// creates windows and handles the electron side.
const electron = require('electron');
// most important is app property
const { app } = electron;
// app starts
// app created
// app ready and start doing things - need to wait, indicate ready event.
// close app

// event handler to check ready
// event based programming
// list of the events in the documentation... :-)
app.on('ready', ()=>{
    console.log('App is now ready');
})


