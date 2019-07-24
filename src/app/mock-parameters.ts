import {PollutionParameter} from './pollution-parameter';

export const PARAMETERS: PollutionParameter[] = [
  {
    id: 'pm10',
    name: 'PM10',
    description: 'Particulate matter less than 10 micrometers in diameter',
    preferredUnit: 'µg/m³'
  },
  {
    id: 'pm25',
    name: 'PM2.5',
    description: 'Particulate matter less than 2.5 micrometers in diameter',
    preferredUnit: 'µg/m³'
  },
  {
    id: 'co',
    name: 'CO',
    description: 'Carbon Monoxide',
    preferredUnit: 'µg/m³'
  },
  {
    id: 'no2',
    name: 'NO2',
    description: 'Nitrogen Dioxide',
    preferredUnit: 'µg/m³'
  },
  {
    id: 'o3',
    name: 'O3',
    description: 'Ozone',
    preferredUnit: 'µg/m³'
  },
  {
    id: 'so2',
    name: 'SO2',
    description: 'Sulfur Dioxide',
    preferredUnit: 'µg/m³'
  },
  {
    id: 'bc',
    name: 'BC',
    description: 'Black Carbon',
    preferredUnit: 'µg/m³'
  }
];
