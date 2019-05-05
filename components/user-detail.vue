<template>
  <div class="main">
    <div class="top-wrapper">
      <img
        class="author-icon"
        src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1662356546,3155434087&fm=27&gp=0.jpg">
      <div class="author-right">
        <p class="author-name">名字</P>
        <p class="author-sign">个人签名</P>
      </div>
    </div>
    <div class="bottom-wrapper">
      <div class="message-item">
        <ul>
          <li
            style="background-color:#f0f0f05c;"
            ref="userHome"
            @click="showHome">
            <img
              class="item-icon"
              src="../static/home-icon.png">
            <span>首页</span>
            <i class="el-icon-arrow-right icon-right" />
          </li>
          <li
            ref="userMessage"
            @click="showMessage">
            <img
              class="item-icon"
              src="../static/user-m-icon.png">
            <span>基本信息</span>
            <i class="el-icon-arrow-right icon-right" />
          </li>
        </ul>
      </div>
      <user-message v-show="messageUI" />
      <user-home v-show="homeUI" />
    </div>
  </div>
</template>

<script>
import TitleDivider from './title-divider';
import UserMessage from './user-message';
import UserHome from './user-home';
export default {
  components: {
    TitleDivider,
    UserMessage,
    UserHome,
  },
   props: {
    user: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      messageUI: false,
      homeUI: true,
    }
  },
  methods: {
    showMessage() {
      this.homeUI = false;
      this.messageUI = true;
      this.$refs.userMessage.style.backgroundColor = "#f0f0f05c"
      this.$refs.userHome.style.backgroundColor = "#fff"
    },
    showHome() {
      this.homeUI = true;
      this.messageUI = false;
      this.$refs.userMessage.style.backgroundColor = "#fff"
      this.$refs.userHome.style.backgroundColor = "#f0f0f05c"
    }
  }
}
</script>

<style lang="scss" scoped>
.main {
  min-width: 800px;
  margin-top: 50px;

  .top-wrapper {
    min-height: 150px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .author-icon {
      border-radius: 50%;
      width: 80px;
      height: 80px;
      margin-left: 50px;

    }

    .author-right {
      display: inline-block;
      margin-left: 50px;

      .author-name {
        font-size: 25px;
        font-weight: 577;
      }

      .author-sign {
        font-size: 15px;
        color:#1e61ff;
      }
    }
  }

  .bottom-wrapper {
    min-height: 400px;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .message-item {
      background-color: #fff;
      min-width: 250px;
      max-height: 250px;

      ul {
        list-style: none;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;

        li {
          height: 100px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;

          span {
            font-size: 20px;
            width: 85px;
          }

          .item-icon {
            width: 40px;
            height: 40px;
          }

          .icon-right {
            width: 40px;
          }
        }

        li:hover {
          background-color: #f0f0f05c;
          cursor: pointer;
        }
      }
    }
  }
}
</style>


