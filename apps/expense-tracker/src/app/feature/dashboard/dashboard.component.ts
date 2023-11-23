import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '../../utility/chart/chart.component';
import { ChartConfig, IChartConfig } from '../../utility/chart/contract';

@Component({
  selector: 'roshun-dashboard',
  standalone: true,
  imports: [CommonModule, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit{
  public expenseByMonthChartConfig: IChartConfig = new ChartConfig();
  private monthsArray: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  private expenses = [1200, 950, 800, 1100, 750, 900, 1000, 850, 950, 1050, 1300, 850];

  ngOnInit(): void {
    this.initExpenseByMonthChart();
  }

  private initExpenseByMonthChart = () => {
    this.expenseByMonthChartConfig.type = "bar";
    this.expenseByMonthChartConfig.labels = this.monthsArray;
    this.expenseByMonthChartConfig.data = [
      {
        label: "Expense",
        data: this.expenses,
        backgroundColor: 'gray'
      },
    ]
  }
}
