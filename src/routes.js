import Home from './components/Home';
import NotFound from './pages/404.vue';

/*
 Paths are resolved in the order of the list.
 Hence, the 404 path must be at the end.
*/
export const routes = [
    { path: '/',  component: Home, name: 'home' },
    { path: '/test', component: { template: '<div>Testing</div>' }, name: 'test' },
    { path: '*', component: NotFound, name: '404' }
];