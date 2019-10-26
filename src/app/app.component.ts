import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pngstuff';
  items = [
    {label: 'Update', icon: 'pi pi-refresh', command: () => {
        this.save();
    }},
    {label: 'Delete', icon: 'pi pi-times', command: () => {
        this.save();
    }},
    {label: 'Angular.io', icon: 'pi pi-info', url: 'http://angular.io'},
    {label: 'Setup', icon: 'pi pi-cog', routerLink: ['/setup']}
];

  save() {
    alert('I hate alerts!')
  }

}
