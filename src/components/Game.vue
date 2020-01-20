<template>
    <div id="container">
    <div id="question">
        <div v-if="state === 'started'">
            <Question/>
        </div>
        <div v-else>
            <p>Waiting for game to start.</p>
        </div>
    </div>
    <div id="team">
        <h2>Classement</h2>
        <Classement/>
    </div>
    </div>
</template>

<script>
    import Question from './Question.vue';
    import Classement from './Classement.vue';
    import {log} from '../utils';
    export default {
        name: "Game",
        components: {
            Question,
            Classement
        },
        data: () => {
            return {
                state: 'initial'
            }
        },
        sockets: {
            'update:state': function (state) {
                log.d(`Received state ${state}`)
                this.state = state.state;
            }
        }
    }
</script>

<style scoped>
    #question {
        width: 70%;
        text-align: center;
    }
    #team{
        width:20%;
    }
    #container {
        display: flex;
        min-width: 100vh;
        padding: 2em;
    }
</style>
