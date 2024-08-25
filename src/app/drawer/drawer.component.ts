import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Router } from '@angular/router';

@Component({
  selector: 'drawer',
  standalone: true,
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css'],
  imports: [CommonModule],
})
export class DrawerComponent {
  @Input() today: boolean | undefined;
  @Input() homeComponent!: HomeComponent;
  isDrawerOpen = true;
  constructor(private router: Router) { }
  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }

  reloadCurrentRoute() {
    this.router.navigate([this.router.url]);
  }
}
