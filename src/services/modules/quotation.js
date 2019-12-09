import request from '@/utils/request';

export let getCityList = (provinceid) => {
    if(provinceid){
        return request(`https://baojia.chelun.com/v1-city-alllist.html?provinceid=${provinceid}`);
    }else{
        return request(`https://baojia.chelun.com/v1-city-alllist.html`);
    }
    
}