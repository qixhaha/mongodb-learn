import axios from 'axios'
const instance = axios.create({
    // 默认的端口号和ip地址 axios 默认访问的ip和端口
    baseUrl:`http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}` ,  
    timeout:2000,
    // 请求头  携带的 一般可以为token唯一标识 第三方鉴权登录
    headers:{

    }
})
export default instance;