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

<script lang="js">
import MCQ from './MCQComponent.vue';
  
export default {
  name: 'Question',
  components: {
    MCQ,
  },
  data: function(){
    return {
    Mcquestions : true,
    Picture : false,
    Audio : false,
    }
  }
}
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
