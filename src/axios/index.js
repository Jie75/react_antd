import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';

export default class Axios {

    
    static jsonp(option) {
        return new Promise((resolve, reject) => {
            JsonP(option.url, {
                param: 'callback'
            }, (err, res) => {
                if (res.status === '1') {
                    resolve(res)
                } else {
                    console.log(err)
                    reject(res.message)
                }
            })
        })
    }
    
    static ajax(options) {
        return new Promise((resolve, reject) => {
            let baseApi = 'https://easy-mock.com/mock/5c22198a4e21841210a6ff6d/test';
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then((response) => {
                if (response.status === 200) {
                    let res = response.data;
                    if (res.state == 0) {
                        resolve(res.result)
                    } else {
                        Modal.info({
                            title: '提示',
                            content: res.data.msg
                        })
                    }
                } else {
                    reject(response.data)
                }
            })
        })
    }
}