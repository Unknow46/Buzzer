<template>
    <div>
        <div id="classement-equipe">
            <ul id="Classement">
                <li v-for="team in teams " v-bind:key="team" v-bind:style="{ borderColor: team.color}" v-bind:id="'t'+team.id">
                    {{ "Equipe " + team.id +" score :" + team.score}}
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
    import { log } from '../utils.js'

    export default {
        name: "Classement",
        data: () => {
            return {
                teams: [],
            }
        },
        sockets: {
            connect: function () {
                log.d('socket connected')
            },
            'update:teams': function (teams) {
                log.d(`Received teams ${teams}`);
                this.teams = teams;
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`)
            },
            'update:answer': function (teamId) {
                document.getElementById('t'+teamId).style.backgroundColor = this.teams[teamId].color;
            }
        },
        methods: {
            "sortTable": function sortTable(col) {
                this.rows.sort(function(a, b) {
                    if (a[col] > b[col]) {
                        return 1;
                    } else if (a[col] < b[col]) {
                        return  -1;
                    }
                    return 0;
                })
            },
            newGame: function (team, question) {
                this.$socket.emit('newGame', team, question);
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
    ul {
        list-style:none;
    }
    li{
        border: solid 2px;
        background-color: #585858;
        text-align: center;
        color: white;
        padding-top: 20px;
        padding-bottom: 20px;

        margin-top: 5px;
        text-shadow: 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000, 0 0 2px #000;

    }


</style>