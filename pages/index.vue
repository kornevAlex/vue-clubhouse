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
import { mapMutations } from 'vuex';

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
  beforeMount() {
    this.actualStep()
  },
  watch: {
    userInfo: {
      handler() {
        window.localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
      },
      deep: true
    }
  },
  methods: {
    ...mapMutations({
      actualStep: 'steps/getActualStep'
    })
  },
  computed: {
    ...mapGetters({
      step: 'steps/getStep',
      userInfo: 'user/getUserInfo'
    }),
    localStor() {
    }
  },
  layout: 'registration',
})
</script>
