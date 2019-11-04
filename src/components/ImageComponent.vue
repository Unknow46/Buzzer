<template>
  <div id="Image">
    <h1>Quelle est la référence de cet image ?</h1>
    <b-img rounded src="require('../static/picture.jpg')" alt="image"></b-img>
  </div>
</template>

<script lang="js">

export default {
  name: 'MCQ',
  data: function(){
    return {
    image:''
    }
  },
  sockets: {
            connect: function () {
                console.log('socket connected')
            },
            'update:questions': function (data) {
                console.log(`Received data on Questions ${data}`)
                this.question = data;
            },
            'update:state': function (state) {
                console.log(`Received state ${state}`)
            }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>