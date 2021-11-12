<template>
  <div class="block">
      <StepInfo
        icon="./man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
    <WhiteBlock class="m-auto whiteBlock">
        <div class="mb-30">
          <input
            v-model="fullName"
            class="field"
            placeholder="Enter fullname"
          />
        </div>
        <Button :clicked="nextSteps" :disabled="nextDisabled">
            Next
            <img class="d-ib ml-10" src="~/static/arrow.svg" />
        </Button>
    </WhiteBlock>
  </div>
</template>

<script>
import WhiteBlock from '../WhiteBlock.vue';
import Button from '../Button.vue';
import StepInfo from '../StepInfo.vue';
import { mapMutations, mapGetters } from 'vuex';

export default {
    components: {
        WhiteBlock,
        Button,
        StepInfo,
    },
    methods: {
      ...mapMutations({
        nextSteps: 'steps/nextSteps',
        updateFullName: 'user/updateFullName',
      }),
    },
    computed: {
      nextDisabled() {
        return !this.fullName;
      },
      fullName: {
        get() {
          return this.$store.state.user.userInfo.fullName
        },
        set(newValue) {
          this.updateFullName(newValue);
        },
      },
    },
}
</script>

<style lang="scss">
.handWaveImg {
  animation-name: wave-animation;
  animation-duration: 3s;
  animation-iteration-count: 1;
  transform-origin: 70% 70%;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 5px;
  margin-bottom: 3px;
}

.block {
  margin: 100px auto;
  text-align: center;

  p {
    font-size: 20px;
    line-height: 36px;
    margin-bottom: 40px;
  }
}

.whiteBlock {
  width: 460px;
}

.title {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
}

@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  5% {
    transform: rotate(-5deg);
  }
  10% {
    transform: rotate(10deg);
  }
  20% {
    transform: rotate(-10deg);
  }
  30% {
    transform: rotate(12deg);
  }
  40% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(12deg);
  }
  60% {
    transform: rotate(-10deg);
  }
  70% {
    transform: rotate(12deg);
  }
  80% {
    transform: rotate(-10deg);
  }
  90% {
    transform: rotate(9deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

</style>