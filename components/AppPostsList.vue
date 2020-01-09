<template>
  <div>
    <h1>Статьи</h1>
    <v-row>
      <v-col cols="12" lg="3" md="4" sm="6" xs="12" v-for="(item, index) in getAllPosts" :key="index">
        <v-card hover class="mx-auto" :to="item.slug">
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
            <v-btn color="dark" tag="div" text>Читать</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from "moment";
import {mapGetters, mapActions} from 'vuex';
export default {
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(['getAllPosts'])
  },
  methods: {
    ...mapActions(['fetchPosts']),
    
    formatDate(d) {
      moment.locale("ru");
      return moment(d).format("LL");
    }
  },
  created() {
    this.fetchPosts();
  }
};
</script>

<style lang="scss">

</style>