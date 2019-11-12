import Home from './components/Home';
import NotFound from './pages/404.vue';
import Game from './components/Game'

/*
 Paths are resolved in the order of the list.
 Hence, the 404 path must be at the end.
*/
export const routes = [
    { path: '/',  component: Home, name: 'home' },
    { path: '/admin', component: { template: '<div>Admin View (TODO)</div>' }, name: 'admin' },
    { path: '/game', component: Game, name: 'game' },
    { path: '*', component: NotFound, name: '404' }
];