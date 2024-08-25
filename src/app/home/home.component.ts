import { Component } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, DrawerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {

  constructor() {
    
    
  }

  showHome = true;
  text = '';
  enable = false;
  sendMessage() {
    this.showHome = false;
  }

  typing(event: any) {
    if (event.target.value) {
      this.enable = true;
    }
    this.text = event.target.value;
  }
  
}
