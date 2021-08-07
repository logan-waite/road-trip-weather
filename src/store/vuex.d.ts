// vuex.d.ts
import { ComponentCustomProperties } from 'vue';
import { Store } from 'vuex';

declare module '@vue/runtime-core' {
  // declare your own store states
  import RootState from './types/root-state.interface';

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<RootState>;
  }
}
