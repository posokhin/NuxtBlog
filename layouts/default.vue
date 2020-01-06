<template>
    <v-app>
        <div>
            <v-toolbar>
                <v-container>
                    <nuxt-link to="/">
                        <v-toolbar-title class="title">
                            <img src="/img/flat.svg" alt="">
                        </v-toolbar-title>
                    </nuxt-link>
                </v-container>
            </v-toolbar>
        </div>
        <v-content class="content">
            <nuxt/>
        </v-content>
        <div>
            <v-footer
                class="font-weight-medium"
                >
                <v-col
                    class="text-center"
                    cols="12"
                >
                    {{ new Date().getFullYear() }} — <strong>FLAT</strong>
                </v-col>
            </v-footer>
        </div>
    </v-app>
</template>

<script>
export default {
    data () {
        return {
            
        }
    }
}
</script>

<style lang="scss">
    .v-card{
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .v-content__wrap{
        padding: 32px 0;
        @media screen and (max-width: 768px) {
            padding: 24px 0;
        }
    }
    .title{
        img{
            max-width: 80px;
        }
    }
</style>
