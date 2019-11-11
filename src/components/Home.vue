<template>
    <div>Welcome on Home</div>
</template>

<script>
    export default {
        name: "Home.vue",
        sockets: {
            connect: function () {
                log.d('socket connected')
            },
            'update:state': function (state) {
                log.d(`Received state ${state}`)

            }
        }
    }
</script>

<style scoped>

</style>