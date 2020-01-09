<template>
  <v-app>
    <app-header></app-header>
    <v-content class="content">
      <keep-alive>
        <nuxt />
      </keep-alive>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";

export default {
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.v-content__wrap {
  padding: 32px 0;
  @media screen and (max-width: 768px) {
    padding: 24px 0;
  }
}
</style>
