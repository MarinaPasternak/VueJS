import { createApp } from 'vue';

import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import AddFriendForm from './components/AddFriendForm.vue';

const app = createApp(App);

app.component('friend-contact', FriendContact);
app.component('add-friend-form', AddFriendForm);

app.mount('#app');
