<template>
    <div>
        <v-toolbar>
            <v-container>
                <nuxt-link to="/">
                    <v-toolbar-title class="title">
                        <img src="img/flat.svg" alt="">
                    </v-toolbar-title>
                </nuxt-link>
            </v-container>
        </v-toolbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
    .title{
        img{
            max-width: 80px;
        }
    }  
</style>