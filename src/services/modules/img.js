import request from '@/utils/request';

export let getImgList = (SerialID,CarId,ColorID) => {
    if(SerialID && !CarId && !ColorID){
        return request(`/v2-car-getImageList.html?SerialID=${SerialID}`);
    }else if(SerialID && !CarId && ColorID){
        return request(`/v2-car-getImageList.html?SerialID=${SerialID}&ColorID=${ColorID}`);
    }else if(SerialID && CarId && ColorID){
        return request(`/v2-car-getImageList.html?SerialID=${SerialID}&CarId=${CarId}&ColorID=${ColorID}`);
    }
}