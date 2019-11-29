<template>
    <div id="status">
        <br>
    </div>
</template>

<script>
    export default {
        name: 'TeamStatus',
        sockets: {
            'show:score': function (data) {
                for (let i=0; i<data.length; i++){
                    let node = document.createElement('p');
                    let txtNode = document.createTextNode('Team ' + data[i].id + " Score :");
                    node.appendChild(txtNode);
                    node.id = 'teamScore' + data[i].id;
                    node.className = "TeamResponded";
                    let br = document.createElement('br');
                    let team_score = document.createElement('p');
                    let team_score_value = document.createTextNode(' ' + data[i].score)
                    document.getElementById('status').appendChild(node);
                    document.getElementById(node.id).appendChild(team_score_value)
                    document.getElementById(node.id).appendChild(br);
                }
            },
            'update:score': function (data) {
                
            },
            'update:answer': function (data) {
                let node = document.createElement('p');
                let txtNode = document.createTextNode('A player from team ' + data + ' is answering the question');
                node.appendChild(txtNode);
                node.id = 'team_answering';
                node.style.position = "fixed";
                node.style.fontSize = "24px";
                node.style.transform = "translate(-50%, -50%)";
                node.style.top = "75%";
                node.style.left = "50%";
                node.className = "TeamResponded";
                document.getElementById('status').appendChild(node)
            },
            'delete:message': function () {
                var element = document.getElementById('team_answering');
                element.parentNode.removeChild(element)
            }
        }
    }
</script>

<style scoped>

</style>
