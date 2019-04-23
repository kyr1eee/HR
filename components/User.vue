<template>
  <div>
    <ul>
      <li class="list">
        <nuxt-link
          to="/my"
          class="img-box">
          <img src="https://cn.vuejs.org/images/logo.png">
        </nuxt-link>
        <dl>
          <dd><nuxt-link to="/company">公司信息</nuxt-link></dd>
          <dd><nuxt-link to="/mailbox">收件箱</nuxt-link></dd>
          <dd><nuxt-link to="/settings">账户设置</nuxt-link></dd>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
li {
  width: 200px;
  .img-box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    overflow: hidden;
    background: #eee;
    cursor: pointer;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  &.list:hover {
    border: 1px solid #E5E5E5;
    border-top: none;

    >dl {
      display: block;
    }
  }
  dl {
    background: #fff;
    display: none;
    z-index: 999;

    dd {
      line-height: 35px;

      &:hover {
        color: #31BBAC;
      }
    }
  }
}



</style>
