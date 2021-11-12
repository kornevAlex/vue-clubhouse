<template>
  <div class="header">
    <div class="container d-flex align-items-center justify-content-between">
      <nuxt-link to="/rooms">
          <div class="headerLogo d-flex align-items-center cup">
            <img src="~/static/hand.png" alt="Logo" class="mr-5" />
            <h4>Clubhouse</h4>
          </div>
      </nuxt-link>
      <nuxt-link to="/profile/1"> 
          <div class="d-flex align-items-center cup">
            <b class="mr-5">Kornev Alexandr</b>
            <Avatar
              :src="'https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1'"
              :width="'50px'"
              :height="'50px'"
            />
          </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Avatar from '~/components/Avatar.vue';

export default {
  components: {
    Avatar,
  }

}
</script>

<style lang="scss">
.header {
  display: flex;
  border-bottom: 1px solid #eae6da;
  padding: 10px 10px 13px;
}

.headerLogo {
  img {
    width: 32px;
    height: 32px;
  }

  h4 {
    font-size: 20px;
    margin: 0;
  }
}

</style>