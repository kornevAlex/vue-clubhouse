<template>
    <div :style="src ? image: styleData" :class="[{avatarBorder : isVoise}, 'avatar', 'd-ib', className, { emptyAvatar: !src} ]">
        {{ isTrue }}
    </div>
</template>
<script>
export default {
    props: {
        src: {
          type: String,
        },
        width: {
          type: String
        },
        height: {
          type: String
        },
        className: {
          type: String
        },
        isVoise: {
          type: Boolean
        },
        letters: {
          type: String
        }
    },
    data() {
      return {
        styleData: {
          width: this.width,
          height: this.height,
        },
        image: {
          width: this.width,
          height: this.height,
          backgroundImage: `url(${this.src})`
        }
      }
    },
    computed: {
      isTrue() {
        return this.src ? "": this.letters;
      }
    }
}
</script>
<style lang="scss">
.avatar {
  position: relative;
  border-radius: 50%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-style: normal;
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 3px;
}

.avatarBorder {
  border: 5px solid #fff;
  box-shadow: 0 0 0 4px #e5e0d0;
}

.mask {
  position: absolute;
}

.border {
  position: relative;
  z-index: 1;
}

.emptyAvatar {
  background-color: #E0E0E0;
}

</style>
