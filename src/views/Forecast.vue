<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons>
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>Trip Forecast</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Trip Forecast</ion-title>
        </ion-toolbar>
      </ion-header>

      <forecast-card city="Salt Lake City" :temperature="100" weather="sun" />
      <forecast-card city="Asheville" :temperature="69" weather="cloud-rain" />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
} from "@ionic/vue";
import ForecastCard from "@/components/ForecastCard.vue";

export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    ForecastCard,
  },
};
</script>

<style scoped>
</style>