import request from '@/utils/request';

//请求汽车详情接口
export let getMasterCarDetail = (SerialID) => {
    return request(`/v2-car-getInfoAndListById.html?SerialID=${SerialID}`)
}