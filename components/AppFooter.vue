<template>
  <div>
    <v-footer class="font-weight-medium">
      <v-col class="text-center" cols="12">
        {{ new Date().getFullYear() }} -
        <strong>FLAT</strong>
      </v-col>
      <app-privacy></app-privacy>
    </v-footer>
  </div>
</template>

<script>
import AppPrivacy from "../components/AppPrivacy";
export default {
  components: {
    AppPrivacy
  }
};
</script>

<style lang="scss">
</style>