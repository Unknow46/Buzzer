<template>
    <div id="question">
        <div v-if="Mcquestions === true">
            <MCQ :question="this.question"/>
        </div>
        <div v-if="Picture === true">
            <ImageQ :question="this.question"/>
        </div>
        <div v-if="Audio === true">
            <Audio :question="this.question"/>
        </div>
        <div id="toolbar">
            <b-button squared variant="primary" @click="updateMCQ">Next question</b-button>
        </div>
    </div>
</template>

<script lang="js">
    import MCQ from './QuestionMCQ.vue';
    import {log} from '../utils';
    import ImageQ from './QuestionImage.vue';
    
    export default {
        name: 'Question',
        components: {
            MCQ,
            ImageQ
        },
        data: function () {
            return {
                Mcquestions: false,
                Picture: false,
                Audio: false,
                question: { question: "No question yet !"}
            }
        },
        sockets: {
            connect: function () {
                log.d('socket connected')
            },
            'update:questions': function (data) {
                this.question = data;
                log.d(`Received data on Questions ${data}`);
                this.Mcquestions = false;
                this.Picture = false;
                this.Audio = false;
                if (data.type == "QCM") this.Mcquestions = true;
                if (data.type == "Image") this.Pictures = true;
                if (data.type == "Audio") this.Audio = true;
            }
        },
        methods: {
            updateMCQ: function () {
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
