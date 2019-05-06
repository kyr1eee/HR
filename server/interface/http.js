import axios from 'axios'

const instance = axios.create({
  baseURL: '/api',
  timeout: 30000,
  headers: {
  }
})

export default instance
