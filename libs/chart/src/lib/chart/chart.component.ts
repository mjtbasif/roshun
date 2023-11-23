import { AfterViewInit, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto'


@Component({
  selector: 'roshun-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})

export class ChartComponent implements AfterViewInit {
  @Input() config: any;
  public chart: any;
  constructor(private renderer: Renderer2, private elRef: ElementRef) {}
  ngAfterViewInit(): void {
    this.createCanvas();
    this.chart = this.createChart(this.config.type, this.config.labels, this.config.data);
  }
  public createChart = (type: any, labels: string[], dataset: { label: string, data: any[] }[], aspectRatio: number = 3.5) => {
    return new Chart(this.config.name, {
      type: type,
      data: {
        labels: labels,
        datasets: dataset
      },
      options: {
        aspectRatio: aspectRatio
      }
    });
  }

  private createCanvas = () => {
    const newDiv = this.renderer.createElement('div');
    let canvas = document.createElement("canvas");
    canvas.id = this.config.name;
    this.renderer.appendChild(newDiv, canvas);
    const parentElement = this.elRef.nativeElement;
    this.renderer.appendChild(parentElement, newDiv);
  }
}
