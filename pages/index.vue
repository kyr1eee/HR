<template>
  <div>
<<<<<<< HEAD
    <div>主页</div>
    <div class="test">我很长</div>
=======
    <header>
      <user />
    </header>
>>>>>>> d210adaf1bf936d7c49439330cb91267ab45df26
  </div>
</template>

<script>
<<<<<<< HEAD
import Home from './home';
export default {
  components: {
    Home
=======
import Navigator from '~/components/Navigator.vue';
import User from '~/components/User.vue'
export default {
  components: {
    Navigator,
    User
>>>>>>> d210adaf1bf936d7c49439330cb91267ab45df26
  }
}
</script>

<style>
  #app {
    background-color: #f4f5f5;
  }
  .test {
    height: 2000px;
  }
</style>
