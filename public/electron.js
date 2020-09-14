// Modules to control application life and create native browser window
const { app, BrowserWindow } = require("electron");
const path = require("path");
const windowStateKeeper = require("electron-window-state");

function createWindow() {
  let mainWindowStateKeeper = windowStateKeeper({
    defaultWidth: 1000,
    defaultHeight: 800,
  });

  var win = new BrowserWindow({
    x: mainWindowStateKeeper.x,
    y: mainWindowStateKeeper.y,
    width: mainWindowStateKeeper.width,
    height: mainWindowStateKeeper.height,
    minWidth: 500,
    //frame: false,
    //titleBarStyle: "hidden",
    webPreferences: {
      // preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindowStateKeeper.manage(win);
  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
