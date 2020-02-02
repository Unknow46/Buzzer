<template>
    <div id="MCQ">
        <b-modal ref="my-modal" hide-footer>
            <h3>L'équipe {{teamId}} a buzzé !</h3>
        </b-modal>
        <h2>{{ question.question }}</h2>
        <b-button id="0" class="reponse" block variant="dark" v-on:click="repondre"> A - {{ question.proposition[0] }}
        </b-button>
        <b-button id="1" class="reponse" block variant="dark" v-on:click="repondre"> B - {{ question.proposition[1] }}
        </b-button>
        <b-button id="2" class="reponse" block variant="dark" v-on:click="repondre"> C - {{ question.proposition[2] }}
        </b-button>
        <b-button id="3" class="reponse" block variant="dark" v-on:click="repondre"> D - {{ question.proposition[3] }}
        </b-button>
    </div>
</template>

<script lang="js">
    import {log} from '../utils';
    export default {
        name: 'MCQ',
        props: ['question'],
        data: function () {
            return {
                teamId: -1,
                loaded: false
            }
        },
        sockets: {
            connect: function () {
                log.d('socket connected')
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`)
            },
            'update:answer': function (teamId) {
                this.teamId = teamId;
                this.$refs['my-modal'].show();
            }
        },
        methods: {
            repondre: function (event) {
                if (this.teamId != -1) {
                    if (this.question.response == event.target.id) {
                        this.$socket.emit('validate', this.teamId);
                        this.$socket.emit('nextQuestion');
                    } else {
                        this.$socket.emit('reject', this.teamId);
                    }
                    this.teamId = -1;
                }
            }
        }
    }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .reponse {
        padding: 3%;
        text-align: justify;
    }
</style>