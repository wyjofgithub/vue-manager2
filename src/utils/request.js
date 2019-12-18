import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: 'http://127.0.0.1:7001', 
  
  timeout: 5000 
})


service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error) 
    return Promise.reject(error)
  }
)

service.interceptors.response.use(

  response => {
    const res = response.data

      return res
    
  }
)  

export default service
