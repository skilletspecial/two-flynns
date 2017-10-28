export interface IDestination {
    displayTitle: string;
    completeTitle: string;
    description: string;
    latitude: number;
    longitude: number;
    milesDriven: number;
    milesFlown: number;
    month: number;
    year: number;
    date?: Date; 
    notes: string;
}

export interface IChartData {
    data: Array<number>;
    label: string;
    backgroundColor?: string;
}

export interface IYearMilesCount {
    year: number;
    milesDriven: number;
    milesFlown: number;
}