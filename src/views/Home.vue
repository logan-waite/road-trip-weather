<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Plan Trip</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Planned Trip</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <location-input label="Origin" @blur="getForecastForLocation" />
        <location-input
          label="Destination"
          @blur="getForecastForLocation($event)"
        />
        <div class="button-container">
          <ion-button router-link="/forecast" class="forecast-button"
            >Get Trip Forecast</ion-button
          >
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import LocationInput from '@/components/LocationInput.vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    LocationInput,
    IonButton,
  },
  methods: {
    ...mapActions(['getForecastForLocation']),
  },
});
</script>

<style scoped>
#container {
  height: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.forecast-button {
  align-self: center;
  margin: 50px;
}
</style>
