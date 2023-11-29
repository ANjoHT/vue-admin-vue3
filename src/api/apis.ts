import { request } from './request';

export function login(data: any) {
    return request({
        url: '/user/login',
        method: 'post',
        data
    });
}

export function register(data: any) {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })

}

export function getPetList(data: any) {
    return request({
        url: '/pet/getPetList',
        method: "post",
        data

    })
}