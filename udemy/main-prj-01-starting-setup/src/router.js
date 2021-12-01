import { createRouter, createWebHistory } from 'vue-router';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';
import CoachContact from './pages/requests/CoachContact.vue';
import RequestReceived from './pages/requests/RequestReceived.vue';
import NotFound from './pages/NotFound.vue';

const appRouter = createRouter({
    history: createWebHistory(),
    routes: [
      { path: '/', redirect: '/coaches' },
      { path: '/coaches', component: CoachesList },
      {
        path: '/coaches/:id',
        component: CoachDetail,
        children: [
          { path: 'contact', component: CoachContact } // /coaches/c1/contact
        ]
      },
      { path: '/register', component: CoachRegistration },
      { path: '/requests', component: RequestReceived },
      { path: '/:notFound(.*)', component: NotFound }
    ]
  });

export default appRouter;