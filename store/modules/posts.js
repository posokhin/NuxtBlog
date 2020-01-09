import axios from "axios";

const state = {
  posts: []
}

const getters = {
  getAllPosts(state) {
    return state.posts;
  }
}

const mutations = {
  setPosts: (state, posts) => (state.posts = posts)
}

const actions = {
  fetchPosts({ commit }) {
    axios.get("http://posokhins.beget.tech/wp-json/wp/v2/posts/")
    .then(response => {
      commit('setPosts', response.data);
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}