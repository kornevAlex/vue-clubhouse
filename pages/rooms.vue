<template>
  <div class="container">
    <div class="mt-40 d-flex align-items-center justify-content-between">
      <h1>All conversations</h1>
      <Button color="green">+ Start room</Button>
    </div>
    <div class="grid mt-30">
      <nuxt-link v-for="room of rooms" :key="room.id" :to="`/rooms/${room.id}`">
        <a class="d-flex">
          <ConversationCard
            :title="room.title"
            :avatars="room.avatars"
            :guests="room.guests"
            :guestsCount="room.guestCount"
            :speakersCount="room.speakersCount"
          />
        </a>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Button from "~/components/Button.vue";
import ConversationCard from "~/components/ConversationCard.vue";

export default {
  components: {
    Button,
    ConversationCard,
  },
  props: {
    rooms: {
      default: [],
    },
  },
};
</script>

<style>
</style>
