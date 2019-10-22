<template>
    <div id="create-game">
    <b-form v-on:submit.prevent>
        <b-form-group>
            <label>Teams : </label>
            <NumberInputSpinner id="team" :min="2" :integerOnly="true" v-model="team"></NumberInputSpinner>
        </b-form-group>
        <b-form-group>
            <label>Questions : </label>
            <NumberInputSpinner :min="1" :integerOnly="true" v-model="question"></NumberInputSpinner>
        </b-form-group>
        <b-button id="round" @click="newGame(team, question)">Create new game</b-button>
    </b-form>
    </div>
</template>

<script>
    import NumberInputSpinner from 'vue-number-input-spinner';
    import { log } from '../plugins/utils.js'

    export default {
        components: {
          NumberInputSpinner
        },
        data() {
            return {
                team: 2,
                question: 1
            }
        },
        sockets: {
            connect: function () {
                log.d('socket connected')
            },
            'update:teams': function () {
                log.d("Received data on Teams")
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`)
            }
        },
        methods: {
            newGame: function (team, question) {
                this.$socket.emit('newGame', team, question)
            }
        }
    }
</script>

<style scoped>
    #create-game{
        margin-left:40%;
        margin-right: 40%;
        margin-bottom: 3vw;
        margin-top: 3vw;
    }
</style>