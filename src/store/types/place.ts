export interface Location {
    name: string;
    forecast: Forecast | undefined;
}

export interface Forecast {
    time: string;
    celsius: number;
    fahrenheit: number;
    conditionCode: number;
}