<template>
    <section>
        <header>
            <h1>My Friends</h1>
        </header>
        <ul>
            <friend-contact
                v-for="friend in friends"
                :id="friend.id"
                :key = "friend.id" 
                :name = "friend.friendName" 
                :is-favourite="friend.isFavourite"
                :email-address="friend.email"
                :phone-number="friend.phone"
                @toogle-favourite="toogleFavourite"
                @delete-current-friend="deleteFriend"
            ></friend-contact>
        </ul>
        <add-friend-form 
            @add-friend="addNewFriend"
        ></add-friend-form>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                friends: [
                    {
                        id: '12',
                        friendName: 'Jane July',
                        phone: '121 231 23 23',
                        email: 'test@gmail.com',
                        isFavourite: true
                    },
                    {
                        id: '11',
                        friendName: 'Lucu Jкккк',
                        phone: '234 555 23',
                        email: 'test122312312@gmail.com',
                        isFavourite: true
                    },
                ]
            };
        },
        methods: {
            toogleFavourite(friendId) { 
               const foundFriend = this.friends.find((friend) => friend.id === friendId);
               foundFriend.isFavourite = !foundFriend.isFavourite;
            },
            addNewFriend(friendNew) { 
               this.friends.push(friendNew);
            },
            deleteFriend(friendID) {
                this.friends = this.friends.filter((friend) => friend.id !== friendID);
            } 
        },
        computed: {}
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

    * {
        box-sizing: border-box;
    }

    html {
        font-family: 'Jost', sans-serif;
    }

    body {
        margin: 0;
    }

    header {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 3rem auto;
        border-radius: 10px;
        padding: 1rem;
        background-color: #58004d;
        color: white;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }

    #app ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    #app li, #app form {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        margin: 1rem auto;
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        width: 90%;
        max-width: 40rem;
    }

    #app h2 {
        font-size: 2rem;
        border-bottom: 4px solid #ccc;
        color: #58004d;
        margin: 0 0 1rem 0;
    }

    #app button {
        font: inherit;
        cursor: pointer;
        border: 1px solid #ff0077;
        background-color: #ff0077;
        color: white;
        padding: 0.05rem 1rem;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    }

    #app button:hover,
    #app button:active {
        background-color: #ec3169;
        border-color: #ec3169;
        box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    }

</style>
