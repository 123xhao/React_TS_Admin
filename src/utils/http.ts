import axios from "axios";



const request = axios.create({
    baseURL:'/api',// 设置请求公共路径
    timeout:10000 // 设置超时时间
})
request.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

export default request
