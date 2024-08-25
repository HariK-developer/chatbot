import { Component } from '@angular/core';
import { DrawerComponent } from '../drawer/drawer.component';
import { CommonModule } from '@angular/common';
import { GeminiService } from '../service/gemini.service';

@Component({
  selector: 'home',
  standalone: true,
  imports: [CommonModule, DrawerComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  showHome = true;
  text = '';
  enable = false;
  response_text: string = '';

  constructor(private geminiService: GeminiService) {}

  async sendMessage() {
    this.showHome = false;
    // this.response_text = await this.geminiService.run(this.text);
  }

  typing(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.value) {
      this.enable = true;
    } else {
      this.enable = false;
    }
    this.text = target.value;
  }
}
