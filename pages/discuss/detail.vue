<template>
  <div>
    <discuss-detail :data="data"/>
  </div>
</template>

<script>
import DiscussDetail from '~/components/discuss-detail';
export default {
  components: {
    DiscussDetail
  },
  props: {
    data: {
      type: Object,
      default: null
    }
  },
  mounted() {
    setTimeout(() => {
      console.log('子路由',this.$route.params);
    },300)
  }
}
</script>

