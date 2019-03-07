<template>
  <div>
    <Cmtbox :id="$route.params.id"></Cmtbox>
  </div>
</template>

<script>
import Cmtbox from "../pinglun/pinglun.vue";

export default {
  components: {
    Cmtbox
  }
};
</script>

<style lang="scss" scoped>

</style>
