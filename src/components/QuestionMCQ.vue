<template>
  
  <div id="MCQ">
    <b-modal ref="my-modal" hide-footer>
      <h3>L'équipe {{teamId}} a buzzé !</h3>
    </b-modal>
    <h1>{{ question }}</h1>

      <b-button id="0"  class="reponse" block variant="dark" v-on:click="repondre"> A -  {{ reponse1 }}</b-button>
      <b-button id="1" class="reponse" block variant="dark" v-on:click="repondre"> B -  {{ reponse2 }}</b-button>
      <b-button id="2" class="reponse" block variant="dark" v-on:click="repondre"> C -  {{ reponse3 }}</b-button>
      <b-button id="3" class="reponse" block variant="dark" v-on:click="repondre"> D -  {{ reponse4 }}</b-button>
  </div>
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
                reponse4: 'Reponse',
                reponseValide : 0,
                teamId : -1
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
                this.reponseValide = data.response;
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`)
            },
            'update:answer': function (teamId) {
                this.teamId = teamId;
                this.$refs['my-modal'].show();
            }
          
          },
          methods:{
            repondre:function(event){
              if(this.teamId != -1){
              if(this.reponseValide == event.target.id){
                this.$socket.emit('validate',this.teamId);
                this.$socket.emit('nextQuestion');
              } else {
                this.$socket.emit('reject',this.teamId);
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
