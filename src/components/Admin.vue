<template>
<div id="container">
    <div id="champs"> 
        <input ref="nombreTeams" placeholder="Nombre d equipes">
        <input ref="nombreQuestions" placeholder="Nombre de questions">
        <b-button squared variant="primary" @click="newGame">Créer Partie</b-button>
    </div>
    <div id="launch" style="display:none">
        <b-button squared variant="primary" @click="startGame">Lancer Partie</b-button>
    </div>
</div>
</template>


<script>
    import { log } from '../utils.js'

    export default {
        name: "Admin",
        data: () => {
            return {
                ready : false,
                nombreTeams: this.$refs.nombreTeams.value,
                nombreQuestions: this.$refs.nombreQuestions.value,
            }
        },
        sockets: {
            connect: function() {
                log.d('socket connected')
            },
            'update:state': function (state){
                log.d(`Received state ${state}`)
                if(state.state == "ready"){
                    document.querySelector('#launch').style.display = "block";
                    document.querySelector('#champs').innerHTML = `<h1> La partie peut être lancée </h1>`;
                }
                if(state.state == "started"){
                    document.querySelector('#champs').innerHTML = "<h1> La réponse à la question est : </h1>"
                }
            },
            'update:questions': function (data) {
                document.querySelector('#launch').innerHTML = data.proposition[data.response];
            }

        },
        methods: {
            newGame: function () {
                this.$socket.emit('newGame',this.$refs.nombreTeams.value, this.$refs.nombreQuestions.value);
            },
            startGame: function() {
                this.$socket.emit('startGame');
            }

        }
    }
</script>

<style scoped>
   /* #container {
        text-align: center;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: center;
        min-height: 80vh;
        min-width: 100%;
    }

    #create {
        padding-left: 10px;
        padding-right: 10px;
    }*/
</style>
