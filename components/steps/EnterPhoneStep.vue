<template>
<div class="block">
    <StepInfo
        icon="/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <WhiteBlock class="m-auto mt-30 whiteBlock">
        <div class="mb-30 input">
          <the-mask type="tel" v-model="phone" :mask="'+# (###) ###-##-##'" class="field"
            placeholder="+7 (999) 333-22-11"/>
            <img src="~/static/russian-flag.png" alt="flag" :width="24"/>
        </div>
        <Button :disabled="nextDisabled" :clicked="nextSteps">
          Next
          <img class="d-ib ml-10" src="~/static/arrow.svg" />
        </Button>
        <p class="policyText mt-30">
          By entering your number, you’re agreeing to our Terms of Service and Privacy Policy.
          Thanks!
        </p>
      </WhiteBlock>
</div>
</template>

<script>
import StepInfo from '~/components/StepInfo.vue';
import WhiteBlock from '~/components/WhiteBlock.vue';
import Button from '~/components/Button.vue';
import { mapMutations } from 'vuex';

export default {
    components: {
        StepInfo,
        WhiteBlock,
        Button, 
    },
    data() {
        return {
            phone: '',
        }
    },
    methods: {
      ...mapMutations({
        nextSteps: 'steps/nextSteps',
      }),
    },
    computed: {
      nextDisabled() {
        return this.phone.length !== 11
      }
    }
}
</script>

<style scoped lang="scss">
.block {
  margin: 100px auto;
  text-align: center;
}

.whiteBlock {
  width: 460px;
}

.input {
  position: relative;
  img {
    position: absolute;
    top: 20px;
    left: 53px;
  }

  input {
    width: 265px;
    padding-left: 55px;
  }
}

.policyText {
  font-size: 14px !important;
  line-height: 22px !important;
  text-align: center;
  color: #817f7a;
  margin-bottom: 0;
}

</style>