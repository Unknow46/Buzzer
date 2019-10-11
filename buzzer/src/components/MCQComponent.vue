<template>
  <div id="MCQ">
    <h1>{{ question }}</h1>
    <ul>
      <li>A - {{ reponse1 }}</li>
      <li>B - {{ reponse2 }}</li>
      <li>C - {{ reponse3 }}</li>
      <li>D - {{ reponse4 }}</li>
      
    </ul>
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
 
    updateMCQ() : void{
      //var socket = io();
      //socket.emit(NEXT_QUESTION)
      //question = 
      //reponse1 = 
      //reponse2 = 
      //reponse3 = 
      //reponse4 = 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul{
  list-style: none;
}
li {
  margin: 10px 60px;
  font-size: 20px;
  color: white;
  background-color: #2f3136;
  padding: 20px;
}
a {
  color: #42b983;
}
</style>
