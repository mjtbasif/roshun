import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from '@roshun/chart';
import { ChartConfig, IChartConfig } from '../../contract/feature-contract';

@Component({
  selector: 'roshun-dashboard',
  standalone: true,
  imports: [CommonModule, ChartComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit{
  public expenseByMonthChartConfig: IChartConfig = new ChartConfig();
  public expenseByMonthLineChartConfig: IChartConfig = new ChartConfig();
  public expenseByMonthPieChartConfig: IChartConfig = new ChartConfig();
  private monthsArray: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  private expenses = [1200, 950, 800, 1100, 750, 900, 1000, 850, 950, 1050, 1300, 850];

  ngOnInit(): void {
    this.initExpenseByMonthChart();
    this.initExpenseByMonthLineChart();
    this.initExpenseByMonthPieChart();
  }

  private initExpenseByMonthChart = () => {
    this.expenseByMonthChartConfig.name = "expenseByMonthChartConfig"
    this.expenseByMonthChartConfig.type = "bar";
    this.expenseByMonthChartConfig.labels = this.monthsArray;
    this.expenseByMonthChartConfig.data = [
      {
        label: "Expense",
        data: this.expenses,
        backgroundColor: '#34495E'
      },
    ]
  }

  private initExpenseByMonthLineChart = () => {
    this.expenseByMonthLineChartConfig.name = "expenseByMonthLineChartConfig";
    this.expenseByMonthLineChartConfig.type = "line";
    this.expenseByMonthLineChartConfig.data = [{
      label: 'BDT',
      data: [65, 59, 80, 81, 56, 55, 40, 54, 77, 10, 288, 8],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }];
    this.expenseByMonthLineChartConfig.labels = this.monthsArray;
  }

  private initExpenseByMonthPieChart = () => {
    this.expenseByMonthPieChartConfig.name = "expenseByMonthPieChartConfig";
    this.expenseByMonthPieChartConfig.type = "pie";
    this.expenseByMonthPieChartConfig.data = [{
      label: 'BDT',
      data: this.expenses,
      hoverOffset: 4
    }];
    this.expenseByMonthPieChartConfig.labels = this.monthsArray
  }
}
