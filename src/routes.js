import Home from './components/Home';
import NotFound from './pages/404.vue';

/*
 Paths are resolved in the order of the list.
 Hence, the 404 path must be at the end.
*/
export const routes = [
    { path: '/',  component: Home, name: 'home' },
    { path: '/admin', component: { template: '<div>Admin View (TODO)</div>' }, name: 'admin' },
    { path: '/game', component: { template: '<div>Public Game View (TODO)</div>' }, name: 'game' },
    { path: '*', component: NotFound, name: '404' }
];