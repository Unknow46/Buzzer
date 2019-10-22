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

<script lang="js">

export default {
  name: 'MCQ',
  data: function(){
    return {
    question :'Question ...',
    reponse1 : 'Reponse',
    reponse2 : 'Reponse',
    reponse3 : 'Reponse',
    reponse4 : 'Reponse'
    }
  },
  sockets: {
    connect: function () {
      //console.log('socket connected')
    },
    customEmit: function () {
      //console.log('this method was fired by the socket server. eg: io.emit("customEmit", data)')
    }
  },
  methods:{
    updateMCQ:function(){
      this.$socket.emit('newGame');
      //console.log(this.$socket.client.emit('newGame'));
      //console.log("yes");
      //socket.emit(NEXT_QUESTION)
      //question = 
      //reponse1 = 
      //reponse2 = 
      //reponse3 = 
      //reponse4  
    }
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
  background-color: #24292e;
  padding: 20px;
}
a {
  color: #42b983;
}
</style>
