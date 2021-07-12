<template>
  <ion-item>
    <ion-label position="stacked">{{ label }}</ion-label>
    <ion-input :value="value" />
  </ion-item>
</template>

<script lang="ts">
import { IonItem, IonLabel, IonInput } from "@ionic/vue";

export default {
  components: {
    IonInput,
    IonItem,
    IonLabel,
  },
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: "",
    };
  },
};
</script>