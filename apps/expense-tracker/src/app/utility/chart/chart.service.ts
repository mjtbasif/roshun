import { Injectable } from '@angular/core';
import Chart from 'chart.js/auto'

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  public createChart = (type: any, labels: string[], dataset: { label: string, data: any[]}[], aspectRatio: number = 3.5) => {
    return new Chart("MyChart", {
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
}
