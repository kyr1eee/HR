<template>
  <img
    class="icon-container icon"
    src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1662356546,3155434087&fm=27&gp=0.jpg"
    @click="alert(1234)">

</template>

<script>
</script>

<style>
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
  .icon:hover {
    /* margin-top: 50px;
    width: 80px;
    height: 80px; */
  }
</style>
