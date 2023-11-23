import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto'


@Component({
  selector: 'roshun-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit, AfterViewInit {
  @Input() config: any;
  public chart: any;
  public divId: any;
  constructor() {

  }
  ngAfterViewInit(): void {
    this.createCanvas();
    this.chart = this.createChart(this.config.type, this.config.labels, this.config.data);
  }

  ngOnInit(): void {
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
    this.divId = "chart-container";
    let canvas = document.createElement("canvas");
    canvas.id = this.config.name;
    canvas.width = 400;
    canvas.height = 200;

    let container = document.getElementById(this.divId);

    if (container) {
      container.appendChild(canvas);
    } else {
      console.error("Container element not found");
    }

  }
}
