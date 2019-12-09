import request from '@/utils/request';

//请求汽车详颜色接口
export let getModelImageYearColor = (SerialID) => {
    return request(`/v2-car-getModelImageYearColor.html?SerialID=${SerialID}`)
}