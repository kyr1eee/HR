import Http from '../http';
import axios from '../interface/axios'

export async function getLoginStatus() {
  const res = await axios.get('/loginStatus')
  return res.data
}
export async function getUserInfo() {
  const rsp = await axios.get('/getUserInfo')
  return rsp.data
}
export async function getUserById(id) {
  const res = await axios.get('/user/' + id)
  return res.data
}

// 讨论区接口
export async function getDiscuss() {
  const url = '/api/discuss';
  return Http.get(url);
}


// export async function posts() {
//   const re = await axios.post('/posts')

// export async function posts(param) {
//   const re = await axios.post('/posts', param)
//   return re.data

// }

