import { Component } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'home',
  standalone: true,
  imports: [DrawerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
