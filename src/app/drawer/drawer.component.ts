import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';



@Component({
  selector: 'drawer',
  standalone: true,
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  imports: [ CommonModule ]
 
})
export class DrawerComponent {
  isDrawerOpen = true;

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }
}
