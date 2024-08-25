import { Component, ViewChild } from '@angular/core';
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
    this.response_text = await this.geminiService.run(this.text);
    // this.response_text = "In the depths of the Pacific Ocean, lived a Great White Shark named Mako. He wasn't like the other sharks, though. He could understand humans and felt a powerful urge to protect them. When a massive oil spill threatened the coast, Mako, with his powerful tail and razor-sharp teeth, became the unlikely hero, rallying the marine life and using his strength to push the oil away from the shore. From then on, Mako, the  became a legend, a protector of the seas, proving that even the most feared creatures can become the greatest heroes."
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

  home () {
    this.showHome = true;
    console.log("I am here");
    
  }
}
