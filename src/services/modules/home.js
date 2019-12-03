import request from '@/utils/request';

export let getMasterBrandList = () => {
    return request('/v2-car-getMasterBrandList.html')
}