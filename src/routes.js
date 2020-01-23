import Home from './components/Home';
import NotFound from './pages/404.vue';
import Admin from './components/Admin.vue'
import Game from './components/Game';
import Buzzer from './components/Buzzer';

/*
 Paths are resolved in the order of the list.
 Hence, the 404 path must be at the end.
*/
export const routes = [
    { path: '/',  component: Home, name: 'home' },
    { path: '/admin', component: Admin, name: 'admin' },
    { path: '/game', component: Game, name: 'game' },
    { path: '/join', component: Buzzer, name: 'buzzer' },
    { path: '*', component: NotFound, name: '404' }
];