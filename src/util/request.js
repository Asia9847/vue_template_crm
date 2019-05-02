import axios from 'axios'


//实例化axios对象
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    withCredentials: true,
    timeout: 5000
})

//建立request 拦截器
service.interceptors.request.use(
    config =>{
        //发送请求前的操作
        //...
        return config
    },
    error =>{
        console.log(error+">>>>>>>>>>>>>>>>>>>>>>>>>")
        return Promise.reject(error)
    }
)


service.interceptors.response.use(
    response => {
        const res = response.data
        //... 返回数据前操作
        return response
    },
    error =>{
        console.log(error+">>>>>>>>>>>>>>>>>>>>>>>>>")
        return Promise.reject(error)
    }
)

export default service