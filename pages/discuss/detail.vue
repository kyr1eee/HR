<template>
  <div>
    <discuss-detail :data="postItem"/>
  </div>
</template>

<script>
import DiscussDetail from '~/components/discuss-detail';
import { mapGetters } from 'vuex';
export default {
  components: {
    DiscussDetail
  },
  data() {
    return {
      postItem: null
    }
  },
  computed: {
    ...mapGetters([
      'post'
    ])
  },
  created() {
    this.postItem = this.setPostItem();
  },
  methods: {
    setPostItem() {
      let postItem = this.post.filter(item => item.id == this.$route.query.pid);
      return postItem[0];
    }
  }
}
</script>

