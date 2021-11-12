<template>
  <div>
    <component :is="pages[step]" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapGetters }from 'vuex';
import WelcomeStep from '~/components/steps/WelcomeStep.vue';
import EnterPhoneStep from '~/components/steps/EnterPhoneStep.vue';
import EnterCodeStep from '~/components/steps/EnterCodeStep.vue';
import ChooseAvatarStep from '~/components/steps/ChooseAvatarStep.vue';
import EnterNameStep from '~/components/steps/EnterNameStep.vue';
import TwitterStep from '~/components/steps/TwitterStep.vue';

export default Vue.extend({
  components: {
    WelcomeStep,
    EnterPhoneStep,
    EnterCodeStep,
    ChooseAvatarStep,
    EnterNameStep,
    TwitterStep
  },
  data() {
    return {
      pages: ['WelcomeStep', 'TwitterStep', 'EnterNameStep', 'ChooseAvatarStep', 'EnterPhoneStep', 'EnterCodeStep']
    }
  },
  computed: {
    ...mapGetters({
      step: 'steps/getStep',
    }),
  },
  layout: 'registration',
})
</script>
