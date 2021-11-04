<template>
   <li>
       <h2>{{ name }}</h2>
       <button @click="toogleDetails">{{ detailsVisibility ? 'Hide' : 'Show' }} Details</button>
        <ul v-if="detailsVisibility">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
   </li>
</template>

<script>
    export default {
        props: {
            'name': {
                type: String,
                required:true
            },
            'phoneNumber': {
                type: String,
                required:true
            },
            'emailAddress': {
                type: String,
                required:true
            },
            isFavourite: {
                type: Boolean,
                required:true,
                default: false
            }
        },
        data() {
            return {
                detailsVisibility: false,
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
                this.detailsVisibility = !this.detailsVisibility;
            }
        },
        computed: {}
    };
</script>
