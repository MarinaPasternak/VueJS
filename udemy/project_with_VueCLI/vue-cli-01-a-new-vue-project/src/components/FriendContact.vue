<template>
   <li>
       <h2>{{ name }} {{ friendIsFavourite ? '(Favourite)' : '' }}</h2>
       <button @click="toogleDetails">{{ detailsVisibility ? 'Hide' : 'Show' }} Details</button>
       <button @click="toogleFavourite">{{ friendIsFavourite ? 'Not my favourite' : 'Make favourite' }}</button>
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
                friendIsFavourite: this.isFavourite
            };
        },
        methods: {
            toogleDetails() {
                this.detailsVisibility = !this.detailsVisibility;
            },
            toogleFavourite() {
                this.friendIsFavourite = !this.friendIsFavourite;
            }
        },
        computed: {}
    };
</script>
