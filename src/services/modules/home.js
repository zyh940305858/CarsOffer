import request from '@/utils/request';

//请求汽车品牌列表接口
export let getMasterBrandList = () => {
    return request('/v2-car-getMasterBrandList.html')
}

//请求汽车类型列表接口
export let getMasterTypeList = (MasterID) => {
    return request(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${MasterID}`)
}