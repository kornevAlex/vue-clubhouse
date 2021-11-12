<template>
<white-block :className="'block'"> 
    <h3 class ="title">
        <img class="handWaveImg" src="~static/hand.png" alt="Celebrations" />
        Welcome to Clubhouse!
    </h3>
    <p>
        We're working hard to get Clubhouse ready for everyone! While we wrap up to finishing 
        youches, we're adding people gradually to make sure nothing breaks :)
    </p>
    <div>
        <Button :clicked="nextSteps">
            Get your username
            <img class="d-ib ml-10" src="~/static/arrow.svg" alt="Click me">
        </Button>
    </div>
    <div class="link mt-15 cup d-ib">
        Have an invite text? Sign in    
    </div>
</white-block>
</template>

<script>
import Button from '../Button.vue';
import WhiteBlock from '../WhiteBlock.vue';
import { mapMutations } from 'vuex';

export default {
    components: {
        Button,
        WhiteBlock
    },
    methods: {
      ...mapMutations({
        nextSteps:'steps/nextSteps'
        }),
    }
}
</script>

<style scoped lang="scss">
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

.link {
    white-space: nowrap
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