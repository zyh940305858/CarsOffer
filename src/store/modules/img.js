import { getImgList, getClassImageList } from '@/services';

const state = {
    colorpageflag:false,
    typepageflag:false,
    detailimgflag:false,
    imgswiperflag:false,
    carinfo:{},
    imglist:[],
    page:1,
    pagesize:30,
    detailimglist:[],
    imageid:'',
    imgswiperlist:[],
    imgswiperindex:0
};


//重构数据方法使图片可用
function reconstructionList (list) {
    if(list[0] && list[0].List){
        list.forEach(item=>{
            item.List.forEach(value=>{
               value.Url=value.Url.replace("{0}",value.LowSize)
            })
        })
    }else{
        list.forEach(item=>{
            item.Url=item.Url.replace("{0}",item.LowSize)
        })
    }
    return list;
}


const mutations = {
    showTypePage(state,data){
        state.typepageflag = true;
    },
    hideTypePage(state,data){
        state.typepageflag = false;
    },
    showColorPage(state,data){
        state.colorpageflag = true;
    },
    hideColorPage(state,data){
        state.colorpageflag = false;
    },
    showDetailImgPage(state,data){
        state.detailimgflag = true;
    },
    hideDetailImgPage(state,data){
        state.detailimgflag = false;
    },
    showImgSwiperPage(state,data){
        state.imgswiperflag = true;
    },
    hideImgSwiperPage(state,data){
        state.imgswiperflag = false;
    },
    setCarInfo(state,data){
        state.carinfo = JSON.parse(sessionStorage.getItem('carinfo'));
    },
    setImgList(state,data){
        state.imglist = data;
    },
    setDetailImgList(state,data){
        if(state.detailimglist.length === 0){
            state.detailimglist = data;
        }else{
            state.detailimglist = state.detailimglist.concat(data);
        }
    },
    setImageId(state,data){
        sessionStorage.setItem('ImageId',data)
        state.imageid = data;
    },
    setPage(state,data){
        state.page += 1;
    },
    pullDownRefresh(state,data){
        state.detailimglist = data;
    },
    setImgSwiperList(state,data){
        state.imgswiperlist = state.imgswiperlist.concat(data.map(item =>{
            return item.Url.replace("{0}",item.LowSize);
        }))
    },
    setImgSwiperIndex(state,data){
        state.imgswiperindex = data;
    }
};


const actions = {
    async getImgList({commit},payload){
        let res = await getImgList(payload);
        let data = reconstructionList(res.data);
        commit("setImgList",data);
    },
    async getClassImageList({commit},payload){
        let res = await getClassImageList(payload);
        let data = reconstructionList(res.data.List);
        commit('setDetailImgList',data);
        commit('setImgSwiperList',data);
    },
    async getPullDownRefresh({commit},payload){
        let res = await getClassImageList(payload);
        let data = reconstructionList(res.data.List);
        commit('pullDownRefresh',data);
    },
};

export default {
    namespaced:true,
    state,
    mutations,
    actions
}