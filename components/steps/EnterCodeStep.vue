<template>
    <div v-if="isLoading" class="block">
        <div class="text-center">
          <div class="loader"></div>
          <h3 class="mt-5">Activation in progress ...</h3>
        </div>
    </div>
    <div v-else class="block">
        <StepInfo icon="./numbers.png" title="Enter your activate code"/>
        <WhiteBlock class="m-auto mt-30 whiteBlock"> 
            <div class="mb-30 codeInput">
                <input v-for="(code, i) of codes" type="tel" :key="i" maxlength="1" :id="String(i)" @keyup="nextElementFocus" v-model="codes[i]" placeholder="X">
            </div>
            <Button :clicked="activate" :disabled="nextDisabled">
                Next
              <img class="d-ib ml-10" src="/static/arrow.svg" />
            </Button>
        </WhiteBlock>
    </div>
</template>
<script>
import  WhiteBlock  from '../WhiteBlock.vue';
import  Button  from '../Button.vue';
import  StepInfo  from '../StepInfo.vue';
import { mapMutations, mapActions } from 'vuex';

export default {
    components: {
        WhiteBlock,
        Button,
        StepInfo,
    },
    data() {
        return {
        isLoading: false,
        codes: ['', '', '', '']
        }
    },
    methods: {
      ...mapActions({
        confirmCode: 'steps/confirmCode'
      }),
      async activate() {
        try {
          this.isLoading = true;
          const confirm = await this.confirmCode(this.codes.join(''));
          if(confirm) {
            await this.$api.get('/todos');
            this.isLoading = false;
            this.$router.push('/rooms');
          }
        } catch (error) {
          console.log('Ошибка активации', error)
        }
      },
      nextElementFocus(ev) {
        const regExp = /[\d]/;
        if(regExp.exec(ev.key)) {
          if(ev.originalTarget.id == 3) {
            ev.target.parentNode.nextElementSibling.click();
            return
          }
          ev.target.nextSibling.focus();
        }
      }
    },
    computed: {
      nextDisabled() {
        return this.codes.some((v) => !v);
      }
    }
}
</script>
<style lang="scss">
.block {
  margin: 100px auto;
  text-align: center;
}

.whiteBlock {
  width: 460px;
}

.codeInput {
  input {
    background: #ffffff;
    border: 1px solid #e3e3e3;
    box-sizing: border-box;
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.03);
    border-radius: 20px;
    width: 65px;
    height: 65px;
    font-weight: bold;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
    margin: 0 5px;
  }
}

</style>