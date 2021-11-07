<template>
    <form>
        <div>
            <label>Name</label>
            <input type="text"/>
        </div>
        <div>
            <label>Email</label>
            <input type="email"/>
        </div>
        <div>
            <label>Phone Number</label>
            <input type="tel"/>
        </div>
        <div>
            <button>Add a new friend</button>
        </div>
    </form>
</template>

<script>
    export default {
        data() {
            return {}
        },
        methods: {},
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
    #app form {
        border-bottom: 4px solid #ccc;
    }
    #app form div {
        margin: 1rem 0;
    }
</style>
