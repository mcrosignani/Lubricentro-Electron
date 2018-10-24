const electron = require('electron');
const url = require('url');
const path = require('path');

const {app, BrowserWindow, Menu} = electron;

let mainWindow;

app.on('ready', function () {
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/dist/lubricentro/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // const mainMenu = Menu.buildFromTemplate(menuTemplate);
    // Menu.setApplicationMenu(mainMenu);
});

// const menuTemplate = [
//     {
//         label: 'Consultas',
//         submenu: [
//             {
//                 label: 'Clientes',
//                 click(){
                    
//                 }
//             }
//         ]
//     }
// ];