<template>
  <footer class="main">
    <el-divider />
    <p>Copyright © HR 2019. All Rights Reserved</p>
  </footer>
</template>

<style lang="scss" scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: footer;
  width: 100%;

  p {
    font-size: 12px;
    padding: 20px 0;
    color: #010;
  }

  .el-divider--horizontal {
    margin-top: 30px;
  }
}
</style>

