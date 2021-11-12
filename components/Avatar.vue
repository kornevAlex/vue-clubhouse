<template>
    <div :style="styleData" :class="[{avatarBorder : isVoise}, 'avatar', 'd-ib', className ]">
        
    </div>
</template>
<script>
export default {
    props: [
        'src',
        'width',
        'height',
        'className',
        'isVoise',
    ],
    data() {
      return {
        styleData: {
          width: this.width,
          height: this.height,
          backgroundImage: `url(${this.src})`
        }
      }
    },
}
</script>
<style lang="scss">
.avatar {
  position: relative;
  border-radius: 50%;
  background-size: cover;
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

</style>
