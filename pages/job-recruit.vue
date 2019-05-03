<template>
  <div class="main">
    <div class="title">
      <title-divider title="发布招聘" />
    </div>
    <div class="wrapper">
      <editor />
    </div>
  </div>
</template>

<script>
import Editor from '../components/editor';
import TitleDivider from '../components/title-divider';
export default {
  components: {
    Editor,
    TitleDivider
  }
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 900px;
  background-color: #fff;
  margin-top: 50px;

  .title {
    width: 100%;
  }
  .wrapper {
    min-width: 800px;
  }
}
</style>

