<template>
    <section>
        <h2>My Friends</h2>
        <ul>
            <friend-contact></friend-contact>
            <friend-contact></friend-contact>
        </ul>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                friends: [
                    {
                        id: 'manuel',
                        friendName: 'Jane July',
                        phone: '121 231 23 23',
                        email: 'test@gmail.com'
                    },
                    {
                        id: 'manuel',
                        friendName: 'Lucu July',
                        phone: '234 555 23',
                        email: 'test122312312@gmail.com'
                    },
                ]
            };
        },
        methods: {},
        computed: {}
    };
</script>
