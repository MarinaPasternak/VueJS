<template>
   <li>
       <h2>{{ name }} {{ isFavourite ? '(Favourite)' : '' }}</h2>
       <button @click="toogleDetails">{{ detailsVisibility ? 'Hide' : 'Show' }} Details</button>
       <button @click="toogleFavourite">{{ isFavourite ? 'Not my favourite' : 'Make favourite' }}</button>
        <ul v-if="detailsVisibility">
            <li><strong>Phone:</strong>{{ phoneNumber }}</li>
            <li><strong>Email:</strong>{{ emailAddress }}</li>
        </ul>
        <button @click="deleteCurrentFriend">Delete Friend</button>
   </li>
</template>

<script>
    export default {
        props: {
            'id': {
               type: String,
               required:true 
            },
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

        emits: ['toogle-favourite', 'delete-current-friend'],
        data() {
            return {
                detailsVisibility: false,
            };
        },
        methods: {
            toogleDetails() {
                this.detailsVisibility = !this.detailsVisibility;
            },
            toogleFavourite() {
                this.$emit('toogle-favourite', this.id);
            },
            deleteCurrentFriend() {
                this.$emit('delete-current-friend', this.id);
            }
        },
        computed: {}
    };
</script>
