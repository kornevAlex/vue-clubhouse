<template>
  <div class="block text-center">
      <div>
          <img class="img" :src="icon" alt="Step picture">
      </div>
      <b class="title">{{ title }}</b>
      <p v-if="description" class="description">{{ description }}</p>
  </div>
</template>

<script>
export default {
    props: [
        'icon',
        'title',
        'description'
    ],
}
</script>

<style scoped lang="scss">
    .title {
        display: block;
        font-size: 20px;
        font-weight: bold;
        margin-top: 10px;
    }

    .description {
        font-size: 20px;
        margin: 0;
    }

    .img {
        width: 48px;
        height: 48px;
    }

</style>