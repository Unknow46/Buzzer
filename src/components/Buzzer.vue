<template>
    <div id="container">
        <div v-if="state === 'initial'">
            <img src="../assets/timer.png">
            <p class="waiting">Waiting for teams<span>.</span><span>.</span><span>.</span></p>
        </div>
        <div id="teams" v-if="state === 'waiting for players' && player === null">
            <p>Select your team</p>
            <b-button v-for="team in teams" v-bind:key="team.id" @click="join(team.id)" v-bind:style="{ 'background-color': team.color }">TEAM {{ team.id }}</b-button>
        </div>
        <div id="buzzer" v-if="player != null">
            <b-btn class="btn-circle btn-xl" :disabled="state !== 'started' || canAnswer === false" v-bind:style="{ 'background-color': team.color }" @click="buzz">{{ state }}</b-btn>
        </div>
    </div>
</template>


<script>
    import {log} from '../utils';
    export default {
        name: "Buzzer",
        data: () => {
            return {
                teams: [],
                state: 'initial',
                player: null,
                team: null,
                canAnswer: true
            }
        },
        sockets: {
            'update:teams': function (teams) {
                log.d(`Received teams ${teams}`);
                this.teams = teams;
                if (this.player != null) {
                    this.canAnswer = this.teams[this.player.team].canAnswer;
                    log.d(`Team can answer : ${this.canAnswer}`)
                }
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`);
                this.state = state;
            },
            'update:player': function (player) {
                log.d(`Received player id ${player}`);
                this.player = player;
                this.team = this.teams[this.player.team];

            }
        },
        methods: {
            join:function(team){
                this.$socket.emit('addPlayer', team);
            },
            buzz:function() {
                this.$socket.emit('buzz', this.player.team);
            }
        }
    }
</script>

<style scoped>
    #container {
        text-align: center;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        min-height: 80vh;
        min-width: 100%;
    }

    #container img {
        width: 15rem;
    }

    #teams {
        display: grid;
        width: 60%;

    }

    #teams button {
        display: block;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .waiting {
        text-transform: uppercase;
        font-size: large;
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

    .btn-circle.btn-xl {
        width: 12em;
        height: 12em;
        padding: 10px 16px;
        border-radius: 6em;
        font-size: 24px;
        line-height: 1.33;
        text-transform: uppercase;
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