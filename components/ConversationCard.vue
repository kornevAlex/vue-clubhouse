<template>
  <div class="block card mb-30">
    <h4 class="title">
      {{ title }}
    </h4>
    <div class="d-flex mt-10 content">
      <div class="avatars">
        <Avatar
          v-for="(items, i) of avatars"
          :key="i"
          :src="url"
          width="45px"
          height="45px"
          :class="{ lastAvatar: avatars.length - 1 === i }"
        />
      </div>
    </div>
    <div class="info ml-10">
      <ul class="users">
        <li v-for="(name, i) of guests" :key="name + i">
          {{ name }}
          <img src="~/static/cloud.png" alt="Cloud" width="14px" height="14" />
        </li>
      </ul>
      <ul class="details">
        <li>
          {{ guestsCount }}
          <img
            src="~/static/user.svg"
            alt="Users count"
            width="12"
            height="12"
          />
        </li>
        <li>
          {{ speakersCount }}
          <img
            class="ml-5"
            src="~/static/message.svg"
            alt="Users count"
            width="12"
            height="12"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Avatar from "~/components/Avatar.vue";

export default {
  props: {
    title: {
      type: String,
    },
    guestsCount: {
      type: Number,
    },
    speakersCount: {
      type: Number,
    },
    guests: {
      type: Array,
      default: [],
    },
    avatars: {
      type: Array,
      default: [],
    },
  },
  components: {
    Avatar,
  },
  computed: {
    isLastAvatar() {
      return this.avatars.length;
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  padding: 30px 35px !important;
  min-height: 170px !important;
  width: 380px !important;
  box-sizing: border-box !important;
  cursor: pointer;
  transition: all 0.15s ease-in-out;
}

.title {
  margin: 0;
  font-weight: bold;
  font-size: 22px;
  line-height: 30px;
  width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.users {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 5px;

  li {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    font-weight: 600;

    img {
      margin-left: 5px;
    }
  }
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.avatars {
  position: relative;
  :global {
    .lastAvatar {
      margin-left: -30px;
      z-index: 1;
      position: relative;
      top: 30px;
    }
  }
}

.details {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin-right: 10px;
  }
}
.block {
  width: 100%;
  max-width: 650px;
  min-height: 200px;
  background: #ffffff;
  border: 1px solid #e8e3d7;
  box-sizing: border-box;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  padding: 65px;
}
</style>