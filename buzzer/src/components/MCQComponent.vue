<template>
  <div id="MCQ">
    <h1>{{ question }}</h1>
    <ol>
      <li>A - {{ reponse1 }}</li>
      <li>B - {{ reponse2 }}</li>
      <li>C - {{ reponse3 }}</li>
      <li>D - {{ reponse4 }}</li>
      
    </ol>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default class MCQ extends Vue{
  question:String = 'Question ...'
  reponse1:String = 'Reponse'
  reponse2:String = 'Reponse'
  reponse3:String = 'Reponse'
  reponse4:String = 'Reponse'

  majQuestion() : void{
    //var socket = io();
    //socket.emit(NEXT_QUESTION)
    //question = 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#MCQ{
  width: 70%;
}
li {
  margin: 10px 60px;
  font-size: 20px;
  color: white;
  background-color: grey;
  padding: 20px;
}
a {
  color: #42b983;
}
</style>
