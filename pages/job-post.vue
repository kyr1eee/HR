<template>
  <div class="main">
    <section class="discuss-content">
      <discuss />
    </section>
    <section class="right-content">
      <div class="topic-content">
        <hot-topic />
      </div>
      <div class="post-content">
        <hot-post />
      </div>
    </section>
  </div>

</template>
<script>
import Discuss from '../components/discuss';
import HotPost from '../components/hot-post';
import HotTopic from '../components/hot-topic';
export default {
  components: {
    Discuss,
    HotPost,
    HotTopic,
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
    justify-content: space-between;
    min-width: $width / 2;
    min-height: $minHeight;

    .topic-content {
      width: 100%;
      height: 30%;
      background: {
      color: $bg
      };
    }

    .post-content {
      width: 100%;
      height: 65%;
      background: {
      color: $bg
      };
    }
  }
}
</style>

