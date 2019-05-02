<template>
  <div>
    <p class="title">
      <i class="el-icon-edit" />
      <span>{{ title }}</span>
    </p>
    <el-divider style="margin:0;"><i class="el-icon-mobile-phone" /></el-divider>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  align-items: center;
  color: #a2a2a2;
  font-size: 18px;
  font-weight: 666;
  height: 60px;
  margin: 0;
  padding-left: 10px;
}
.el-divider--horizontal {
  margin: 0;
}
</style>

