import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartService } from './chart.service';

@Component({
  selector: 'roshun-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss',
})
export class ChartComponent implements OnInit {
  @Input() config: any;
  public chart: any;
  constructor(private chartService: ChartService) { }

  ngOnInit(): void {
    this.chart = this.chartService.createChart(this.config.type, this.config.labels, this.config.data);
  }
}
