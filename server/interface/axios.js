import axios from 'axios'

const instance = axios.create({
  baseURL: '/ericwu',
  timeout: 30000,
  headers: {
  }
})

export default instance
