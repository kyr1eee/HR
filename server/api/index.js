import axios from '../interface/axios'

export async function getLoginStatus() {
  const res = await axios.get('/loginStatus')
  return res.data
}
export async function getUserInfo() {
  const rsp = await axios.get('/loginStatus')
  return rsp.data
}
