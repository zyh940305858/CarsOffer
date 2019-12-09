import request from '@/utils/request';

//图片
export let getImageList = (params) => {
    return request('/v2-car-getImageList.html', { params })
}