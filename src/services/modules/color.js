import request from '@/utils/request.js';

//请求汽车颜色列表接口
export let getColorList = (SerialID) =>{
    return request(`/v2-car-getModelImageYearColor.html?SerialID=${SerialID}`);
}