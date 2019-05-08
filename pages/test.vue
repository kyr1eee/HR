<template>
  <div>
    <button @click="posts">确定</button>
  </div>
</template>

<script>
import {getUserById,posts,getUserInfo, getDiscuss} from '../server/api/index';
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

