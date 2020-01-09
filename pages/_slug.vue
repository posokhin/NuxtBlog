<template>
  <div>
    <v-container v-for="(item, index) in post" :key="index">
      <v-btn class="mb-6" dark to="/">
        <v-icon dark left>mdi-arrow-left</v-icon>Назад
      </v-btn>
      <div class="post-detail">
        <h1>{{item.title.rendered}}</h1>
        <div v-html="item.content.rendered"></div>
      </div>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  head() {
    return {
      title: this.getTitle()
    };
  },
  data() {
    return {
      post: []
    };
  },
  methods: {
    getPost() {
      axios
        .get(
          "http://posokhins.beget.tech/wp-json/wp/v2/posts/?slug=" +
            this.$route.fullPath
        )
        .then(response => {
          this.post = response["data"];
        });
    },
    getTitle() {
      for (let i = 0; i < this.post.length; i++) {
        const title = this.post[i];
        for (const i in title) {
          let res = title["title"].rendered;
          return res;
        }
      }
    }
  },
  beforeMount() {
    this.getPost();
    this.getTitle();
  }
};
</script>

<style lang="scss">
	.post-detail {
		max-width: 768px;
	}
</style>