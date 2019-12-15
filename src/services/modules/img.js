import request from '@/utils/request';

//车系图片列表接口
export let getImgList = (obj) => {
    let {SerialID, CarId, ColorID } = obj;
    if(SerialID && !CarId && !ColorID){
        return request(`/v2-car-getImageList.html?SerialID=${SerialID}`);
    }else if(SerialID && !CarId && ColorID){
        return request(`/v2-car-getImageList.html?SerialID=${SerialID}&ColorID=${ColorID}`);
    }else if(SerialID && CarId && ColorID){
        return request(`/v2-car-getImageList.html?SerialID=${SerialID}&CarId=${CarId}&ColorID=${ColorID}`);
    }
}

//车系图片分类列表接口
export let getClassImageList = (obj) =>{
    let {SerialID,ImageID,Page,PageSize,ColorID} = obj;
    if(ColorID){
        return request(`/v2-car-getCategoryImageList.html?SerialID=${SerialID}&ImageID=${ImageID}&Page=${Page}&PageSize=${PageSize}&ColorID=${ColorID}`);
    }else{
        return request(`/v2-car-getCategoryImageList.html?SerialID=${SerialID}&ImageID=${ImageID}&Page=${Page}&PageSize=${PageSize}`);
    }
}
    
