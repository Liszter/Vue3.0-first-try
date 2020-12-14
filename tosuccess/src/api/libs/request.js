import { axiosPost, axiosGet } from '../libs/http';

function getData (data) {
    return new Promise((resolve, reject) => {
        axiosGet({
            url: '/gwssi/gateway/gzl/lcQx/getAllJsXi',
            success (data) {
                resolve(data)
            },
            error (err) {
                reject(err)
            }
        })
     })
}

export {
    getData
} 