import store from '../store'
import { setCookie } from '../server/utils/setCookie'
import { getLoginStatus, getUserInfo } from '../server/api/index'

export default ({ app }) => {
  app.router.beforeEach(async (to, from, next) => {
    if (to.query.auth_token) {
      setCookie('auth_token', to.query.auth_token)
      const data = await getLoginStatus()
      // console.log(data)
      if (data.code === 0) {
        window.localStorage.setItem('isLogin', true)
        //console.log("1111111111111111111:"+store.getters.isLogin)
        app.store.commit('loginStatus', true)
        const route = {...to, replace: true}
        delete route.query.auth_token
        next(route)
      } else {
        window.location.href = 'http://stuer.ericwu.cn/sso'
      }
    }
    const isLogin = window.localStorage.getItem('isLogin')
    // console.log(`isLogin=${isLogin}`)
    if (isLogin) {
      if (!app.store.getters.user) {
        const result = await getUserInfo()
        // 获取用户信息是否成功，并且用户的等级大于5
        if (result.code === 0 && (result.data.role >= 4)) {
          app.store.commit('setUser', result.data)
          app.store.commit('loginStatus', true)
        } else {
          window.localStorage.removeItem('isLogin')
          app.store.commit('setUser', null)
          app.store.commit('loginStatus', false)
          window.location.href = '/'
        }
      }
      next()
    } else {
      const data = await getLoginStatus()
      if (data.code === 0) {
        window.localStorage.setItem('isLogin', true)
        app.store.commit('loginStatus', true)
        if (!app.store.getters.user) {
          const rs = await getUserInfo()
          if (rs.code === 0) {
            app.store.commit('setUser', rs.data)
          }
        }
        next()
      } else {
        const nhref = window.location.href
        window.location.href = `http://stuer.ericwu.cn/sso?redirect=${nhref}`
      }
    }
  })
}
