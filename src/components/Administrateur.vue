<template>
    <div id="container">
    <div id="team">
        <div v-if="state === 'initial'">
        <p>Entrer le nombre d'équipe :</p>
        <input type="number" name="number_team" id="team_number" min="2">
        <br>
        <br>
        <p> Entrer le nombre de question :</p>
        <input type="number" name="number_question" id="number_question" min="3">
        <br>
        <br>
        <button type="button" onclick="createTeam" title="valider">Valider</button>
    </div>
        <div v-else>
            <p>waiting game start</p>
        </div>
    </div>
    </div>
</template>

<script>
    import {log} from '../utils';
    export default {
        name: "Administrateur",
        data: () => {
            return {
                state: 'initial'
            }
        },
        sockets: {
            'update:state': function (state) {
                log.d(`Received state ${state}`)
                this.state = state
            }
        },
        methods: {
            createTeam: function () {
                let number_team = document.getElementById("team_number").value
                let number_question = document.getElementById("number_question").value
                this.$socket.emit('newGame', number_team, number_question)
            }
        }
    }
</script>

<style scoped>
    #team {
        width: 70%;
        text-align: center;
    }
    #container {
        display: flex;
        min-width: 270vh;
        padding: 5em;
    }
</style>