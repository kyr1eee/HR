<template>
  <img
    class="icon-container icon"
    :src="avatar"
  >
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
  /* 不设置scoped,原因是该组件是多余的，设置scoped将有问题，有空整合 */
  .icon-container {
    z-index: 120;
    position: relative;
  }
  .icon {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    transition: all .4s;
    z-index: 120;
  }

</style>
