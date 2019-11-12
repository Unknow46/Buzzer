<template>
    <div id="home">
        <div>
            <img src="../assets/timer.png">
            <p class="waiting">Waiting for a game to start<span>.</span><span>.</span><span>.</span></p>
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