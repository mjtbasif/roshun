export interface IChartConfig {
    name: string;
    type: any,
    labels: string[],
    data: any[],
    aspectRatio?: number
}

export class ChartConfig implements IChartConfig {
    name: string = "";
    type: any = 'bar';
    labels: string[] = [];
    data: any[] = [];
    aspectRatio?: number | undefined;

    constructor(config: Partial<IChartConfig> = {}) {
        Object.assign(this, config);
      }
}