import request from "../utils/http"

export function login(data){
    return request({
        method:'post',
        url:'/auth/login',
        data
    })
}
