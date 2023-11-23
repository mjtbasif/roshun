export interface IChartConfig {
    type: any,
    labels: string[],
    data: any[],
    aspectRatio?: number
}

export class ChartConfig implements IChartConfig {
    type: any = 'bar';
    labels: string[] = [];
    data: any[] = [];
    aspectRatio?: number | undefined;

    constructor(config: Partial<IChartConfig> = {}) {
        Object.assign(this, config);
      }
}