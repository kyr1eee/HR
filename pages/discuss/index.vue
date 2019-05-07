<template>
  <div class="main">
    <section class="discuss-content">
      <discuss :data="discuss"/>
    </section>
    <section class="right-content">
      <div class="topic-content">
        <hot-topic />
      </div>
      <div class="post-content">
        <hot-post :data="hotPost" />
      </div>
    </section>
  </div>

</template>
<script>
import Discuss from '~/components/discuss';
import HotPost from '~/components/hot-post';
import HotTopic from '~/components/hot-topic';
import { getDiscuss } from '~/server/api';
export default {
  components: {
    Discuss,
    HotPost,
    HotTopic,
  },
  data() {
    return {
      discuss: [],
      hotTopic: null,
      hotPost: []
    }
  },
  created() {
    this._getDiscuss();
    // 请求API直至父组件mounted还没获取完
    // Vue生命周期： 父组件created -> 子组件created -> 子组件mounted -> 父组件mounted
  },
  mounted() {
  },
  methods: {
    _getDiscuss() {
      getDiscuss().then(res => {
        // res -> Object, res.data -> Array
        this.discuss = res.data;
        this.hotPost = this.getHotDiscuss(this.discuss);
        // console.log('discuss page created request',this.hotPost)
      }).catch(e => {
        console.error('请求 /api/discuss 失败:', e);
      })
    },
    getHotDiscuss(data) {
      let highLight = data.filter(item => item.highlight == 1);
      return highLight;
    }
  }
}
</script>

<style lang="scss" scoped>
$minHeight: 600px;
$width: 600px;
$minWidth: 960px;
$bg: #fff;
.main {
  margin: 50px 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  min-width: $minWidth;

  .discuss-content {
    min-width: $width;
    min-height: $minHeight;
    background: {
      color: $bg
    };

  }

  .right-content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    max-width: $width / 2;
    min-height: $minHeight;

    .topic-content {
      width: 100%;
      max-height: 30%;
      min-height: 200px;
      background: {
      color: $bg
      };
    }

    .post-content {
      width: 100%;
      max-height: 65%;
      min-height: 300px;
      margin-top: 100px;
      background: {
      color: $bg
      };
    }
  }
}
</style>

