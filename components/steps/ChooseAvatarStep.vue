<template>
  <div class="block">
      <StepInfo
        icon="/static/celebration.png"
        :title="`Okay, ${fullName}!`"
        description="How’s this photo?"
      />
      <WhiteBlock class="m-auto mt-40 whiteBlock">
            <div class="avatar">
                <Avatar width="120px" height="120px" :src="avatarURL" :key="avatarKey"/>
            </div>
            <div class="mb-30">
                <label for="image" class="link cup">
                    Choose a different photo
                </label>
            </div>
            <input id="image" type="file" hidden @change="chooseAvatar"/>
            <Button :clicked="nextSteps">
                Next
                <img class="d-ib ml-10" src="~/static/arrow.svg" />
            </Button>
        </WhiteBlock>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import  WhiteBlock  from '../WhiteBlock.vue';
import  Button  from '../Button.vue';
import  StepInfo  from '../StepInfo.vue';
import  Avatar  from '../Avatar.vue';
export default {
    components: {
        WhiteBlock,
        Button,
        StepInfo,
        Avatar,
    },
    methods: {
      ...mapMutations({
        nextSteps: 'steps/nextSteps',
        setPhoto: 'user/uploadPhoto',
      }),
      ...mapActions({
        uploadPhoto: 'user/downloadAvatars'
      }),
      async chooseAvatar(ev) {
        const file = ev.target.files[0];

        if(file) {
          const imageURL = URL.createObjectURL(file);
          // this.avatarURL = imageURL;
          await this.uploadPhoto(file);
          this.avatarKey += 1;
          ev.target.value = null;
        }

      }
    },
    data() {
      return {
        avatarKey: 0,
      }
    },
    computed: {
      ...mapGetters({
        fullName: 'user/getfullName',
      }),
      avatarURL: {
        get() {
          return this.$store.state.user.userInfo.avatarUrl;
        },
        set(val) {
          this.setPhoto(val);
        },
      },
    },
}
</script>

<style lang="scss">

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
  top: 1px;
  margin-right: 6px;
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
