<template>
  <div id="ImageQ">
    <h1>Quelle est la référence de cet image ?</h1>
    <b-img v-bind:src="myImage" alt="image"></b-img>
  </div>
</template>

<script lang="js">
    import {log} from '../utils';

export default {
  name: 'ImageQ',
  data: function(){
    return {
    myImage:'../assets/minecraft.jpg'
    }
  },
  sockets: {
            connect: function () {
                log.d('socket connected')
            },
            'update:questions': function (data) {
                log.d(`Received data on Questions ${data}`)
                this.question = data;
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>