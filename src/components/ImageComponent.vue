<template>
  <div id="Image">
    <h1>Quelle est la référence de cet image ?</h1>
<<<<<<< HEAD
    <b-img rounded src="myImage" alt="image"></b-img>
=======
    <b-img rounded src="require('../static/picture.jpg')" alt="image"></b-img>
>>>>>>> 23da85699b4e6ced8e0ce4efc15fd11a88d6cd3b
  </div>
</template>

<script lang="js">

export default {
  name: 'Image',
  data: function(){
    return {
<<<<<<< HEAD
    myImage:''
=======
    image:''
>>>>>>> 23da85699b4e6ced8e0ce4efc15fd11a88d6cd3b
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