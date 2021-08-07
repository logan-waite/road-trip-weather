<template>
  <ion-item class="location-input">
    <ion-label position="stacked">{{ label }}</ion-label>
    <ion-input v-model="value" @ionChange="debouncedChange" />
    <span class="error" v-if="error">{{ error }}</span>
  </ion-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapActions } from 'vuex';
import { IonItem, IonLabel, IonInput } from '@ionic/vue';
import * as _ from 'lodash';

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
  data(): {value: string; error: string; debouncedChange: any} {
    return {
      value: '',
      error: '',
      debouncedChange: undefined,
    };
  },
  created() {
    this.debouncedChange = _.debounce(this.onChange, 500);
  },
  unmounted() {
    this.debouncedChange.cancel();
  },
  methods: {
    ...mapActions(['getForecastForLocation']),
    async onChange() {
      console.log("I'm changing!");
      this.error = '';
      try {
        await this.getForecastForLocation(this.value);
      } catch (err) {
        this.error = err.message;
      }
    },
  },
});
</script>

<style scoped>
.location-input {
  margin-bottom: 15px;
}
.error {
  color: var(--ion-color-danger);
  font-size: 12px;
}
</style>
