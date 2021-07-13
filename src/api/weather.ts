import { Forecast } from '@/store/types/place';
import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'https://api.weatherapi.com/v1/',
  params: {
    key: process.env.VUE_APP_WEATHER_API_KEY,
  },
});

interface GetCurrentParams {
    location: string;
    airQuality?: boolean;
}

interface GetForecastParams extends GetCurrentParams {
    days: number;
    alerts?: boolean;
}

export async function getCurrent({ location, airQuality }: GetCurrentParams): Promise<Forecast> {
  const aqi = airQuality ? 'yes' : 'no';

  const params = {
    q: location,
    aqi,
  };

  try {
    const { current } = (await weatherApi.get('current.json', { params })).data;
    console.log({ condition: current.condition });
    return {
      celsius: current.temp_c,
      fahrenheit: current.temp_f,
      conditionCode: current.condition.code,
      time: current.last_updated_epoch,
    };
  } catch (e) {
    console.log({ e });
    return {} as Forecast;
  }
}

export async function getForecast({
  location, days, airQuality, alerts: inAlerts,
}: GetForecastParams) {
  const aqi = airQuality ? 'yes' : 'no';
  const alerts = inAlerts ? 'yes' : 'no';

  const params = {
    q: location,
    days,
    aqi,
    alerts,
  };

  try {
    const result = await weatherApi.get('forecast.json', { params });
    console.log({ result });
  } catch (e) {
    console.log({ e });
  }
}

export default {
  getForecast,
  getCurrent,
};
