import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerService } from '../service/container.service';

@Component({
  selector: 'roshun-error-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss',
})
export class ErrorPageComponent implements OnInit {
  public quote: { body: string, author: string } = { body: "", author: "" };

  constructor(private containerService: ContainerService) {}

  ngOnInit(): void {
    this.quote = this.getRandomQuote(this.containerService.motivationalQuotes);
  }

  private getRandomQuote(quotes: { body: string; author: string }[]): { body: string; author: string } {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

}
