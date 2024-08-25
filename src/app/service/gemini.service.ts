import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { GoogleGenerativeAI } from "@google/generative-ai";

@Injectable({
  providedIn: 'root'
})
export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    this.genAI = new GoogleGenerativeAI(environment.gemini!);
    this.model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  }

  run = async (input_text: string): Promise<string> => {
    try {
      const prompt = input_text;
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      console.log(response);
      
      const text = await response.text(); // Awaiting the text() method
      return text;
    } catch (error) {
      return "Error generating content.";
    }
  };
}
