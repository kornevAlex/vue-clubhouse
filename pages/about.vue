<template>
<div>
    <EnterNameStep />
</div>
</template>
<script>
import EnterPhoneStep from '~/components/steps/EnterPhoneStep.vue';
import EnterCodeStep from '~/components/steps/EnterCodeStep.vue';
import ChooseAvatarStep from '~/components/steps/ChooseAvatarStep.vue';
import EnterNameStep from '~/components/steps/EnterNameStep.vue';


export default {
    components: {
        EnterPhoneStep,
        EnterCodeStep,
        ChooseAvatarStep,
        EnterNameStep
    },
};
</script>
