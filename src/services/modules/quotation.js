import request from '@/utils/request';

export let getCityList = (provinceid) => {
    if(provinceid){
        return request(`https://baojia.chelun.com/v1-city-alllist.html?provinceid=${provinceid}`);
    }else{
        return request(`https://baojia.chelun.com/v1-city-alllist.html`);
    }
    
}

export let autoGetPosition = () => {
    return request(`https://baojia.chelun.com/location-client.html`);
}

export let getDealerList = (carId,cityId) => {
    return request(`https://baojia.chelun.com/v2-dealer-alllist.html?carId=${carId}&cityId=${cityId}`)
}