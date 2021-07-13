import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from 'vuex';
import weatherApi from '@/api/weather';
import RootState from './types/root-state.interface';
import { Forecast } from './types/place';

interface UpdateLocationValue {
    location: string;
    forecast: Forecast;
}

const key: InjectionKey<Store<RootState>> = Symbol('Store Injection Key');

export const store = createStore<RootState>({
  state: {
    locations: [],
  },
  mutations: {
    addLocation({ locations }, location) {
      locations.push({ name: location, forecast: {} as Forecast });
    },
    updateLocation(
      { locations },
      { location: inLocation, forecast }: UpdateLocationValue,
    ) {
      const location = locations.find((l) => l.name === inLocation);
      if (location) {
        location.forecast = forecast;
      }
    },
  },
  actions: {
    async getForecastForLocation({ commit }, location: string) {
      commit('addLocation', location);
      const forecast = location ? await weatherApi.getCurrent({ location }) : {};
      commit('updateLocation', { location, forecast });
    },
  },
});

export function useStore() {
  return baseUseStore(key);
}
