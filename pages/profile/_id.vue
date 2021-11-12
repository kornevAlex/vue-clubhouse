<template>
    <div>
      <div class="container mt-30">
        <Profile
          :avatarUrl="'https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1'"
          :fullname="'Kornev Aleksandr'"
          :username="'kor.sanya'"
          :about="'Test info'"
        />
      </div>
    </div>
</template>
<script>
import Profile from '~/components/Profile.vue';

export default {
    components: {
        Profile,
    },
    data() {
        return {
            id: null
        }
    },
    async asyncData({ params }) {
        const id  = params.id
            console.log(params);
        return {
            id
        };
    },
}
</script>