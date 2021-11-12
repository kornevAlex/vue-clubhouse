<template>
  <div class="block">
    <StepInfo
      icon="./connect.png"
      title="Do you want import info from Twitter?"
    />
    <WhiteBlock class="m-auto mt-40 whiteBlock">
        <div class="avatar">
          <b>KA</b>
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0.5 50C0.5 30.5091 3.25846 18.1987 10.7286 10.7286C18.1987 3.25846 30.5091 0.5 50 0.5C69.4909 0.5 81.8014 3.25846 89.2714 10.7286C96.7415 18.1987 99.5 30.5091 99.5 50C99.5 69.4909 96.7415 81.8014 89.2714 89.2714C81.8014 96.7415 69.4909 99.5 50 99.5C30.5091 99.5 18.1987 96.7415 10.7286 89.2714C3.25846 81.8014 0.5 69.4909 0.5 50Z"
              fill="#E0E0E0"
              stroke="#D6D6D6"
            />
          </svg>
        </div>
        <h2 class="mb-40">Kornev Aleksandr</h2>
        <Button :clicked="onAuth">
          <img src="~/static/vk.svg" alt="vkontakte logo" class="twitterLogo" />
          Import from VK
          <img class="d-ib ml-10" src="~/static/arrow.svg" />
        </Button>
        <div @click="nextSteps" class="link mt-20 cup d-ib">Enter my info manually</div>
    </WhiteBlock>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';
import WhiteBlock from "../WhiteBlock.vue";
import Button from "../Button.vue";
import StepInfo from "../StepInfo.vue";

export default {
  components: {
    WhiteBlock,
    Button,
    StepInfo,
  },
  created() {
    window.addEventListener('message', ({data, origin})=> {
      if(typeof data === "string" && data.includes('avatarUrl')) {
        const json = JSON.parse(data)
        this.setUserInfo(json)
        this.nextSteps()
      }
    });
  },
  methods: {
    ...mapMutations({
      nextSteps: 'steps/nextSteps',
      setUserInfo: 'user/setUserInfo',
    }),
    onAuth() {
      const win = window.open('http://localhost:3001/auth/vkontakte', 'Auth', 'width=600, height=400px, status=yes, toolbar=no, menubar=no, location=no')
    }
  },
};
</script>
<style lang="scss">
.avatar {
  position: relative;

  b {
    position: absolute;
    font-size: 28px;
    left: 50%;
    top: 47%;
    transform: translate(-50%, -50%);
  }
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

.twitterLogo {
  display: inline-block;
  position: relative;
  top: 3px;
  margin-right: 8px;
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