<template>
  <ion-item>
    <ion-label position="stacked">{{ label }}</ion-label>
    <ion-input v-model="value" @ionBlur="$emit('blur', value)" />
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonItem, IonLabel, IonInput } from '@ionic/vue';

export default defineComponent({
  components: {
    IonInput,
    IonItem,
    IonLabel,
  },
  emits: ['blur'],
  props: {
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      value: '',
    };
  },
});
</script>
