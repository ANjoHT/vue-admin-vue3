import axios from 'axios';
import { ElMessage } from 'element-plus';
import router from '@/router';
export const request = (options: any) => {
    return new Promise((resolve, reject) => {
        const service = axios.create({
            baseURL: "http://localhost:8888",
            timeout: 5000
        })
        service.interceptors.request.use(
            (config: any) => {
                const token = () => {

                    return localStorage.getItem("token");
                };
                if (token) {
                    config.headers["Content-Type"] = "application/json;charset=UTF-8";
                    config.headers['token'] = token()
                    config.headers.Authorization = token()
                }
                return config
            },
            error => {
                console.log('出错啦', error);
                Promise.reject(error)
            }
        ),
            service.interceptors.response.use(
                (response: any) => {
                    if (response.data.code == 403) {
                        ElMessage.error('token已失效')
                        localStorage.clear()
                        router.replace('/login')
                    } else {
                        return response.data;
                    }
                },
                error => {
                    console.log(error, 'error');
                    ElMessage.error('服务器请求错误,请稍后再试')
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