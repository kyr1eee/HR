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

// 讨论区接口
export async function getDiscuss() {
  const url = '/api/discuss';
  return Http.get(url);
}


// export async function posts() {
//   const re = await axios.post('/posts')
// }

