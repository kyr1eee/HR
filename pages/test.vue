<template>
  <div>
    <button @click="setResumes">确定</button>
  </div>
</template>

<script>
import {getUserById,posts,getUserInfo, getDiscuss, getResumesMessage, setResumesMessage} from '../server/api/index';
export default {
  mounted() {
    this.getDiscuss();
    let self = this
    self.$axios.get('/api/discuss').then(({status, data}) => {
      if (status===200) {
        console.log("success")
        console.log(data)
      }else {
        self.error = `服务器出错，错误码:${status}`
      }
    })
    self.$axios.get('/job-manage/findAll').then(({status, data}) => {
      if (status===200) {
        console.log("success")
        console.log(data)
      }else {
        self.error = `服务器出错，错误码:${status}`
      }
    })
    this.getUserById(15)
    let data = this.getUserId()
    //let {id} = data
    console.log(data)
    //this.posts('腾讯春招正式开始啦', '春招将于3月5日开始，3月31日截止，有兴趣的同学可以进入官网了解。')
  },
  methods: {
    getDiscuss() {
      getDiscuss().then(res => {
        console.log('Get Discuss: ', res);
      }).catch(e => {
        console.error('Get Discuss Failed: ',e);
      })
    },
    getUserById(id) {
      getUserById(id).then(res => {
        console.log('Get User: ', res);
      }).catch(e => {
        console.error('Get User Failed: ',e);
      })
    },
    getUserId() {
      getUserInfo().then(res => {
        console.log('Get UserId: ', res.data.id);
      }).catch(e => {
        console.error('Get User Failed: ',e);
      })
    },
    getResumes() {
      getResumesMessage().then(res => {
        console.log('Get Resume Success:', res);
      }).catch(e => {
        console.error('Get Resume Failed:', e)
      })
    },
    setResumes() {
      setResumesMessage({
        userId: 134,
        name: 'JOJO',
        phone: '15521514921',
        email: '765238976@qq.com',
        major: '哲学',
        graduate: '2019届',
        like: 'Web前端开发工程师',
        skill: '1.掌握DIV+CSS布局\n2.精通JS,ES6\n3.精通Vue,React',
        work: '深圳偶记吧公司\n完成产品设计与研发内部系统',
        item: '1.react-native开发的github app 跨平台应用\n2.vue开发的移动web app',
        intro: '帅气阳光自信'
      }).then(res => {
        console.log('提交简历成功', res);
      }).catch(e => {
        console.error('提交简历失败', e);
      })
    },
    posts() {

    //   let param = {
    //     title: '腾讯春招正式开始啦',
    //     content: '春招将于3月5日开始，3月31日截止，有兴趣的同学可以进入官网了解。'
    //   }
    //   posts(param).then(res => {
    //     console.log('Post posts: ', res);
    //   }).catch(e => {
    //     console.error('Post posts Failed: ',e);
    //   })
      let self = this
      self.$axios.post('/job-manage/submit', {
        coId: 3,
        name: 'this.form.name',
        place: 'this.form.locate',
        salary: 'this.form.salary',
        date: '2019-05-29T16:00:00.000Z',
        top: 0,
        workfare: 'this.form.type.join('-')',
        req: 'this.form.desc'
      }).then(({status, data}) => {
      if (status===200) {
        console.log("success")
        console.log(data)
      }else {
        self.error = `服务器出错，错误码:${status}`
      }
    })
    }
  }
}
</script>

<style lang="scss">
</style>

