import request from '@/utils/request';

export let getImgList = (SerialID,CarId,ColorID) => {
    return request(`/v2-car-getImageList.html?SerialID=${SerialID}`);
}