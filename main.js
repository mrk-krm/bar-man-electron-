console.log('main process working');

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

//initialize window
let win;

function createWindow() {
    //create browser window
    win = new BrowserWindow();

    //load html page
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    //open devtools only for development mode only
    win.webContents.openDevTools();
    win.on('closed', () => {
        win = null;
    })
}

//run create window
app.on('ready', createWindow);