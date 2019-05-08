<template>
  <div class="loading-wrapper">
    <div class="loading-icon">
      <i class="el-icon-loading" />
    </div>
    <div class="loading-text">
      拼命加载中...
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .loading-wrapper {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .loading-icon {
      font-size: 50px;
    }
    .loading-text {
      color: #666;
      font-size: 17px;
    }

  }
</style>

