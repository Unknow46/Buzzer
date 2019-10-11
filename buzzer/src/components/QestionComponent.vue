<template>
  <div id="questions">
      <div v-if="Mcquestions"> 
        <MCQ/>
      </div> 
      <div v-if="Picture"> 
        <MCQ/>
      </div>
      <div v-if="Audio"> 
        <MCQ/>
      </div>  
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import MCQ from './MCQComponent.vue';

/*export default class Question extends Vue{
    Mcquestions : boolean = true;
    Picture : boolean = false;
    Audio : boolean = false;

  updateQuestion() : void{
    //var socket = io();
    //socket.emit(NEXT_QUESTION)
    //question = 
  }
  
}*/
export default Vue.extend({
  name: 'Question',
  components: {
    MCQ,
  },
  data(){  return {
    Mcquestions : true,
    Picture : false,
    Audio : false,
  }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#questions{
  width: 70%;
  color: white;
  padding-top: 60px;
  padding-left: 40px;
  font-size: 20px;
}
</style>
