<template>
    <span>
        <nuxt-link to="/rooms">
            <div class="d-flex mb-30 cup">
                <img src="~/static/back-arrow.svg" alt="Back" class="mr-10" />
                <h3>Back</h3>
            </div> 
        </nuxt-link> 
        <div class="d-flex  align-items-center">
            <div class="d-flex align-items-center">
                <Avatar :src="avatarUrl" width="100px" height="100px" />
                <div class="d-flex flex-column ml-30 mr-30">
                    <h2 class="mt-0 mb-0">{{ fullname }}</h2>
                    <h3 :class="`${username} mt-0 mb-0`">{{ username }}</h3>
                </div>
            </div>
            <Button class="followButton" color="blue">
            Follow
            </Button>
        </div>
      <p class="about">{{about}}</p>
    </span>
</template>
<script>
    import Avatar from './Avatar.vue';
    import Button from './Button.vue';

    export default {
        props: [
            'fullname',
            'username',
            'avatarUrl',
            'about'
        ],
        components: {
            Avatar,
            Button,
        }
    }
</script>
<style lang="scss">
    .followButton {
    width: 100px;
    height: 40px;
    font-size: 16px;
    padding: 0;
    font-weight: 700;
    }

    .username {
    opacity: 0.5;
    }

    .about {
    font-size: 22px;
    line-height: 30px;
    }

</style>