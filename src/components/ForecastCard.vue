<template>
  <ion-card>
    <ion-card-content class="forecast-card__content">
      <span class="place">{{ city }}</span>
      <div class="weather">
        <span class="temperature">{{ temperature }}° F</span>
        <!-- <span class="temperature">{{ temperature }} ℉</span> -->
        <font-awesome-icon class="icon" :icon="['fal', weather]" />
      </div>
    </ion-card-content>
  </ion-card>
</template>

<script lang='ts'>
// Unicode chars for degrees: ℉ ℃ °
import { IonCard, IonCardContent } from "@ionic/vue";

export default {
  components: {
    IonCard,
    IonCardContent,
  },
  props: {
    city: {
      type: String,
      required: true,
    },
    temperature: {
      type: Number,
      required: true,
    },
    weather: {
      type: String,
      required: true,
      validator(value: "sun" | "cloud-rain") {
        return ["sun", "cloud-rain"].includes(value);
      },
    },
  },
};
</script>

<style scoped>
.forecast-card__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
}
.weather {
  display: flex;
  align-items: center;
}
.temperature {
  margin: 0px 20px;
}
.icon {
  font-size: 42px;
}
</style>