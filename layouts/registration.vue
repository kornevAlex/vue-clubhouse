<template>
    <div>
        <Nuxt />
    </div>
</template>
<script>
export default {
    head: {
        title: 'Clubhouse: Drop-in audio chat',
        meta: [
            {
                name: "viewport", 
                content: "width=device-width, initial-scale=1.0"
            }
        ],
        link: [
            { href: 'https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700;800&display=swap', rel:'stylesheet' },
            { href: 'https://fonts.gstatic.com', rel: 'preconnect'}
        ],
    },
};
</script>
