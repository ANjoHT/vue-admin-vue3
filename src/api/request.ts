import axios from 'axios';
import { ElMessage } from 'element-plus';
import router from '@/router';
export const request = (options:any) => {
    return new Promise((resolve,reject) => {
        const service = axios.create({
            baseURL:"http://localhost:8888",
            timeout:5000
        })
        service.interceptors.request.use(
            (config:any) => {
                const token = () => {
                    if (localStorage.getItem("token")) {
                      return localStorage.getItem("token");
                    } else {
                      router.replace('/login')
                    }
                  };
                if(token) {
                    config.headers["Content-Type"] = "application/json;charset=UTF-8";
                    config.headers['X-Token'] = token()
                    config.headers.Authorization = token()
                }
                return config
            },
            error => {
                console.log('出错啦',error);
                Promise.reject(error)
            }
        ),
        service.interceptors.response.use( 
            (response:any) => {
                return response.data
            },
            error => {
                console.log(error,'error');
                if(error.response.status == 403){
                    ElMessage.error('出错了')
                } else {
                    ElMessage.error('服务器请求错误,请稍后再试')
                }
                return Promise.reject(error)
            }
        )
        service(options)
            .then((res) => {
                resolve(res)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
export default request