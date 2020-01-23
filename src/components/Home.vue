<template>
    <div id="home">
        <div>
            <b-button id="0" class="rooting" block squared variant="primary" v-on:click="game"> Projection partie </b-button>
            <b-button id="0" class="rooting" block squared variant="primary" v-on:click="join"> Joueur </b-button>
            <b-button id="0" class="rooting" block squared variant="primary" v-on:click="admin"> Gestion de la partie </b-button>
        </div>
    </div>
</template>

<script>
    import {log} from '../utils';
    export default {
        name: "Home.vue",
        sockets: {
            connect: function () {
                log.d('socket connected')
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`)
                if (state === 'waiting for players') {
                    this.$router.push('game')
                }
            }
        },
        methods: {
            start: function(){
                this.$socket.emit('newGame',2,3);
                this.$socket.emit('addPlayer',0);
                this.$socket.emit('addPlayer',1);
                this.$socket.emit('startGame');
            },
            game:function(){
                this.$router.push("game");
            },
            join:function(){
                this.$router.push("join");
            },
            admin:function(){
                // if(identification()){
                this.$router.push("admin");
                //}
            }
        }
    }
</script>

<style scoped>

    #home {
        text-align: center;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        min-height: 80vh;
        min-width: 100vh;
    }
    #home img {
        width: 15rem;
    }
    .waiting {
        text-transform: uppercase;
        font-size: xx-large;
    }
    .waiting span {
        font-size: 2em;
        animation-name: blink;
        animation-duration: 1.4s;
        animation-iteration-count: infinite;
        animation-fill-mode: both;
    }
    .waiting span:nth-child(2) {
        animation-delay: .2s;
    }
    .waiting span:nth-child(3) {
        animation-delay: .4s;
    }
    @keyframes blink {
        0% {
            opacity: .2;
        }
        20% {
            opacity: 1;
        }
        100% {
            opacity: .2;
        }
    }
</style>
