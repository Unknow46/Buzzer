<template>
  <div id="question">
      <div v-if="Mcquestions"> 
        <MCQ/>
      </div> 
      <div v-if="Picture"> 
        <Image/>
      </div>
      <div v-if="Audio"> 
        <MCQ/>
      </div>  
    <div id="toolbar">
      <b-button squared variant="primary" @click="updateMCQ">Next question</b-button>
    </div>
  </div>
</template>

<script lang="js">
import MCQ from './QuestionMCQ.vue';
import Image from './QuestionImage.vue';
  
export default {
  name: 'Question',
  components: {
    MCQ,
    Image
  },
  data: function(){
    return {
    Mcquestions : false,
    Picture : true,
    Audio : false,
    }
  },
  methods: {
    updateMCQ:function(){
      this.$socket.emit('nextQuestion');
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #question {
        width: 70%;
        color: white;
        padding-top: 60px;
        padding-left: 40px;
        font-size: 20px;
    }

    #toolbar {
        padding-top: 2rem;
    }
</style>
