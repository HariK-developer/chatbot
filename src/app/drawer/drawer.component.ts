import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Drawer } from 'flowbite';
import type { DrawerOptions, DrawerInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';

@Component({
  selector: 'drawer',
  standalone: true,
  imports: [],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent implements AfterViewInit {
  @ViewChild('drawer', { static: false }) drawerElement!: ElementRef<HTMLElement>;

  instanceOptions: InstanceOptions = {
    id: 'drawer',
    override: true
  };

  options: DrawerOptions = {
    placement: 'right',
    backdrop: true,
    bodyScrolling: false,
    edge: false,
    edgeOffset: '',
    backdropClasses:
      'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30',
    onHide: () => {
      console.log('drawer is hidden');
    },
    onShow: () => {
      console.log('drawer is shown');
    },
    onToggle: () => {
      console.log('drawer has been toggled');
    },
  };

  drawer!: DrawerInterface;

  ngAfterViewInit() {
    // Initialize the Drawer after the view has been initialized
    this.drawer = new Drawer(this.drawerElement.nativeElement, this.options, this.instanceOptions);

    // Show the drawer
    this.drawer.show();
  }
}
