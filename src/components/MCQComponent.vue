<template>
    <div id="MCQ">
        <h1>{{ question }}</h1>
        <ul>
            <li>A - {{ reponse1 }}</li>
            <li>B - {{ reponse2 }}</li>
            <li>C - {{ reponse3 }}</li>
            <li>D - {{ reponse4 }}</li>

        </ul>
        <b-button id="round" @click="updateMCQ">Next question</b-button>
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
                log.d(`Received data on Questions ${data}`)
                this.question = data;
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`)
            }
        },
        methods: {
            updateMCQ: function () {
                this.$socket.emit('newGame', 2, 3);
                this.$socket.emit('nextQuestion');
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    ul {
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
