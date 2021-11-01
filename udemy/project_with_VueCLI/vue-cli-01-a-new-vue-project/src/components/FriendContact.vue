<template>
   <li>
       <h2>{{ friend.friendName }}</h2>
       <button @click="toogleDetails">Show Details</button>
        <ul v-if="datailsVisibility">
            <li><strong>Phone:</strong>{{ friend.phone }}</li>
            <li><strong>Email:</strong>{{ friend.email }}</li>
        </ul>
   </li>
</template>

<script>
    export default {
        data() {
            return {
                datailsVisibility: false,
                friend: {
                    id: 'manuel',
                    friendName: 'Jane July',
                    phone: '121 231 23 23',
                    email: 'test@gmail.com'
                }
            };
        },
        methods: {
            toogleDetails() {
                this.datailsVisibility = !this.datailsVisibility;
            }
        },
        computed: {}
    };
</script>
