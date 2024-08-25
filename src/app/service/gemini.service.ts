import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
const { GoogleGenerativeAI } = require("@google/generative-ai");

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI = new GoogleGenerativeAI(environment.gemini);
  private model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  constructor() {
    this.run();
  }

  // Using arrow function to preserve 'this' context
  private run = async () => {
    try {
      const prompt = "Write a story about an AI and magic";
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text(); // Awaiting the text() method
      console.log(text);
    } catch (error) {
      console.error("Error generating content:", error);
    }
  };
}
