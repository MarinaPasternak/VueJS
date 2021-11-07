<template>
    <form @submit.prevent="addFriend">
        <div>
            <label>Name</label>
            <input type="text" v-model="friend.friendName"/>
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="friend.email"/>
        </div>
        <div>
            <label>Phone Number</label>
            <input type="tel" v-model="friend.phone"/>
        </div>
        <div>
            <button>Add a new friend</button>
        </div>
    </form>
</template>

<script>
    export default {
        emits: {
            'add-friend': function(id) {
                if (id) {
                    return true;
                } else {
                    console.wan('not id')
                }
            }
        },
        data() {
            return {
                friend: {
                    id: String(new Date()),
                    friendName: '',
                    phone: '',
                    email: '',
                    isFavourite: false
                }
            }
        },
        methods: {
            addFriend() {
                this.$emit('add-friend', this.friend);

            }
        },
        computed: {}
    };
</script>

<style>
    #app input {
        font: inherit;
        padding: 0.15rem;
    }
    #app label {
        font-weight: bold;
        margin-right: 1rem;
        width: 7rem;
        display: inline-block;
    }
    #app form div {
        margin: 1rem 0;
    }
</style>
