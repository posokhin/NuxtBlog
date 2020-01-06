<template>
    <v-container>
        <h1>Статьи</h1>
    <v-row>
        <v-col  
        cols="12"
        lg="3"
        md="4"
        sm="6"
        xs="12"
        v-for="(item, index) in posts" :key="index"
        >
            <!-- <v-card
                class="mx-auto"
                outlined
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <v-list-item-title class="headline mb-1">{{ item.title.rendered }}</v-list-item-title>
                    <v-list-item-subtitle v-html="item.excerpt.rendered"></v-list-item-subtitle>
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        :src=" item.better_featured_image ? item.better_featured_image.source_url : '' "
                    >
                    </v-img>
                </v-list-item-content>
                </v-list-item>

                <v-card-actions>
                <v-btn text :to="item.slug">Читать</v-btn>
                </v-card-actions>
            </v-card> -->

            <v-card
                class="mx-auto"
                :to="item.slug"
            >
                <v-img
                class="white--text align-end"
                height="200px"
                :src=" item.better_featured_image ? item.better_featured_image.source_url : '' "
                >
                <v-card-title>{{ item.title.rendered }}</v-card-title>
                </v-img>

                <v-card-subtitle class="pb-0">{{ formatDate(item.date) }}</v-card-subtitle>

                <v-card-text class="text--primary" v-html="item.excerpt.rendered"></v-card-text>

                <v-card-actions>
                    <v-btn
                        color="dark"
                        tag="div"
                        text
                    >
                        Читать
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';
import moment from 'moment';
export default {
	data() {
		return {
			name: 'anton',
			posts: []
		}
	},
	methods: {
		getPosts(){
            axios.get('http://posokhins.beget.tech/wp-json/wp/v2/posts/')
                .then((response)=>{
                    this.posts = response['data']
                });
        },
        formatDate(d){
            moment.locale('ru');
            return moment(d).format('LL');
        }
    },
	beforeMount() {
        this.getPosts();
	},
}
</script>
