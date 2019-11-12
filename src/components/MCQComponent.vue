<template>
  <div id="MCQ">
    <h1>{{ question }}</h1>

      <b-button disabled class="reponse" block variant="dark"> A -  {{ reponse1 }}</b-button>
      <b-button disabled class="reponse" block variant="dark"> B -  {{ reponse2 }}</b-button>
      <b-button disabled class="reponse" block variant="dark"> C -  {{ reponse3 }}</b-button>
      <b-button disabled class="reponse" block variant="dark"> D -  {{ reponse4 }}</b-button>

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
                reponse4: 'Reponse'
            }
        },
        sockets: {
            connect: function () {
                log.d('socket connected')
            },
            'update:questions': function (data) {
                console.log(`Received data on Questions ${data}`)
                this.question = data.question;
                this.reponse1 = data.proposition[0];
                this.reponse2 = data.proposition[1];
                this.reponse3 = data.proposition[2];
                this.reponse4 = data.proposition[3];
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`)
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
