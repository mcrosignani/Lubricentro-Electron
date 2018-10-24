import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { remote, ipcRenderer } from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lubricentro';

  constructor(private router: Router) {
    var menu = remote.Menu.buildFromTemplate([{
      label: 'Consultas',
      submenu: [
        {
          label: 'Clientes',
          click: () => {
            this.router.navigate(['/', 'cust-component']);
          }
        }  
      ]
    }]);

    remote.Menu.setApplicationMenu(menu);
  }
}
