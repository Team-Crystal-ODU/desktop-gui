// ./public/electron.js
const path = require('path');

const { app, BrowserWindow } = require('electron');
const { ConnectionBuilder } = require('electron-cgi');
const isDev = require('electron-is-dev');

function createWindow() {

  let connection = new ConnectionBuilder()
    .connectTo('dotnet', 'run', '--project', '../ElectronCgiDotNetDemo')
    .build();

  connection.onDisconnect = () => {
    console.log('Connection between node and .net lost');
  };

  connection.send('greeting', 'Ashley', response => {
    console.log(response);
    connection.close();
  });

  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' });
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.whenReady().then(createWindow);

// Quit when all windows are closed, except on macOS. 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
