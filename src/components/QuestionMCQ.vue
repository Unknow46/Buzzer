<template>
<<<<<<< HEAD
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
=======
  <div id="MCQ">
    <h1>{{ question }}</h1>

      <b-button disabled class="reponse" block variant="dark"> A -  {{ reponse1 }}</b-button>
      <b-button disabled class="reponse" block variant="dark"> B -  {{ reponse2 }}</b-button>
      <b-button disabled class="reponse" block variant="dark"> C -  {{ reponse3 }}</b-button>
      <b-button disabled class="reponse" block variant="dark"> D -  {{ reponse4 }}</b-button>

  </div>
>>>>>>>  init
</template>

<script>
    import {log} from '../utils';

    export default {
        name: 'MCQ',
        data: function () {
            return {
                question: 'Question ...',
                reponse1: 'Reponse',
                reponse2: 'Reponse',
                reponse3: 'Reponse',
                reponse4: 'Reponse'
            }
        },
        sockets: {
            connect: function () {
                log.d('socket connected')
            },
            'update:questions': function (data) {
                log.d(`Received data on Questions ${data}`)
                this.question = data.question;
                this.reponse1 = data.proposition[0];
                this.reponse2 = data.proposition[1];
                this.reponse3 = data.proposition[2];
                this.reponse4 = data.proposition[3];
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`)
<<<<<<< HEAD
            },
            'update:answer': function (teamId) {
                this.teamId = teamId;
                this.$refs['my-modal'].show();
            }

        },
        methods: {
            repondre: function (event) {
                console.log(this.question.response)
                console.log(event.target.id)
                if (this.question.teamId != -1) {
                    if (this.question.response == event.target.id) {
                        this.$socket.emit('validate', this.teamId);
                        this.$socket.emit('nextQuestion');
                    } else {
                        this.$socket.emit('reject', this.teamId);
                    }
                    this.teamId = -1;
                }
=======
>>>>>>>  init
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
