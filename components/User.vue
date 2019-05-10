<template>
  <div>
    <ul>
      <li class="list">
        <div
          class="icon-container"
          @mouseenter="iconMove"
          @mouseleave="iconMoveOut">
          <nuxt-link
            to="/my"
            tag="div">
            <company-icon
              ref="iconCompany"
              avatar="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=384335294,2228800258&fm=27&gp=0.jpg"/>
          </nuxt-link>
        </div>
        <dl
          @mouseenter="listMove"
          @mouseleave="listMoveOut"
          ref="menu">
          <div>
            <dd class="company-name">山寨野鸡公司</dd>
            <dd><nuxt-link to="/company">公司信息</nuxt-link></dd>
            <dd><nuxt-link to="/mailbox">收件箱</nuxt-link></dd>
            <dd><nuxt-link to="/settings">账户设置</nuxt-link></dd>
            <dd
              class="exit"
              @click="exit">退出</dd>
          </div>
        </dl>
      </li>
    </ul>
  </div>
</template>

<script>
import CompanyIcon from './company-icon';
import { mapGetters } from 'vuex';
export default {
  components: {
    CompanyIcon
  },
  data() {
    return {
      menuIn: false,
    };
  },
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  created() {
    setTimeout(() => {
      console.log(this.user);
    },5000)
  },
  methods: {
    exit() {
      document.cookie = '';
      this.$notify({
        title: '退出登录',
        message: '正在回到登录页',
        position: 'top-left',
        duration: 1000,
      });
      setTimeout(() => {
        window.location.href="http://stuer.ericwu.cn/";
      }, 500);
    },
    iconMove() {
      this.$refs.menu.style.opacity = 1;
      this.$refs.menu.style.margin = '0px -50px';
      this.$refs.iconCompany.$el.style.marginTop = '50px';
      this.$refs.iconCompany.$el.style.width = '80px';
      this.$refs.iconCompany.$el.style.height = '80px';
    },
    iconMoveOut() {
      this.timer = setTimeout(() => {
        if(this.menuIn === false) {
          this.resetStyle();
        }
      }, 300);
    },
    listMove() {
      this.menuIn = true;
    },
    listMoveOut() {
      this.menuIn = false;
      this.$refs.menu.style.opacity = 0;
      this.$refs.menu.style.margin = '20px -50px';
      this.$refs.iconCompany.$el.style.marginTop = '0px';
      this.$refs.iconCompany.$el.style.width = '50px';
      this.$refs.iconCompany.$el.style.height = '50px';
      clearTimeout(this.timer);
    },
    resetStyle() {
      this.$refs.menu.style.opacity = 0;
      this.$refs.menu.style.margin = '20px -50px';
      this.$refs.iconCompany.$el.style.marginTop = '0px';
      this.$refs.iconCompany.$el.style.width = '50px';
      this.$refs.iconCompany.$el.style.height = '50px';
      clearTimeout(this.timer);
    }
  },
}
</script>

<style lang="scss">
ul {
  padding: 0;
  margin: 0;
}
li {
  list-style: none;
  transition: all 0.4s;
  .icon-container {
    width: 50px;
    height: 50px;
    cursor: pointer;
    display: inline-block;
  }

  dl {
    background: rgba(255, 255, 255, 0.81);
    position: absolute;
    top: 70px;
    width: 200px;
    margin: 20px -50px;
    opacity: 0;
    z-index: 110;
    padding: 0;
    transition: all .4s;

    &:hover {
      opacity: 1;
      margin: 0px -50px;
    }

    dd {
      text-align: center;
      line-height: 35px;
      margin: 0;
      padding: 0;
      &:hover {
        color: #31BBAC;
      }
    }
  }
}

.company-name {
  padding-top: 40px;
}

.exit {
  background-color: rgba(225, 225, 225, 0.81)
}


</style>
