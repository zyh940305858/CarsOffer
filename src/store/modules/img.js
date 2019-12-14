import { getImgList,getClassImageList } from '@/services/index';

const state = {
    data:[],                //汽车五个部位的展示图片
    Page:1,                 //汽车五个部位的展示图片
    PageSize:30,            //汽车五个部位的展示图片
    classimagelist:[],      //汽车详情数据
    classlistflag:false,
    colorpageflag:false,
    carinfo:JSON.parse(sessionStorage.getItem("carinfo")),
    imagepreviewlist:[],
    imagepreview:false,
    previewindex:0,
    imgIndex: 0,
    show: false,
    imgList: [],
    count: 0,
    arrLen:0
};

const mutations = {
    //获取到所有图片数据
    getImgListData(state,data){
        state.data = data;
    },
    //获取到图片类型数据
    setClassImageList(state,data){
        state.classimagelist = data;
    },
    showClassList(state,data){
        state.classlistflag = data;
    },
    hideClassList(state,data){
        state.classlistflag = data;
    },
    setCarInfo(state,data){
         state.carinfo = JSON.parse(sessionStorage.getItem("carinfo"));
    },
    showColorPage(state,data){
        state.colorpageflag = true;
    },
    hideColorPage(state,data){
        state.colorpageflag = false;
    },
    setPage(state,data){
        state.Page = state.Page+1;
    },
    setPullUpData(state,data){
        state.classimagelist = state.classimagelist.concat(data);
    },
    showImagePreview(state,data){
        state.imagepreview = true;
    },
    setPreviewIndex(state,data){
        state.setpreviewindex = data;
    },
    reconstructionPreviewList(state,data){
        let list = data.map(item =>{
            return item.Url
        });
        state.imagepreviewlist = state.imagepreviewlist.concat(list);
    },

    // preview 的显示/隐藏
    previewShow(state, payload) {
        state.show = payload
    },


    // 存储 图片的index
    saveIndex(state, payload) {
        console.log(payload)
        state.imgIndex = payload
    },

    // 存储 所有的图片
    allImgList(state, payload) {
        console.log(payload)
        state.imgList = payload
    },

    // 获取 图片所有的张数
    imgCount(state, payload) {
        state.count = payload
    },

    // 获取 数组length
    setArrLen(state, payload) {
        state.arrLen = payload
    }
};

//重构数据方法使图片可用
function reconstructionList (list) {
    if(list[0].List){
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

const actions = {

    async getImgList({commit},payload){
        let res = await getImgList(payload);
        console.log(res)
        if(res.data.length > 0){
            let data = await reconstructionList(res.data);
            await commit('hideClassList',false);
            await commit('getImgListData',data);
        }else{
            await commit('getImgListData',[]);
        }
    },
    
    async getClassImageList({commit},payload){
        let res = await getClassImageList(payload);
        let data = await reconstructionList(res.data.List);
        await commit("setClassImageList",data);
        await commit('showClassList',true);
    },

    async setPullUpData({commit},payload){
        // console.log(payload)
        await commit('setPage');
        let res = await getClassImageList(payload);
        let data = await reconstructionList(res.data.List);
        await commit('setPullUpData',data)
    },

    async showImagePreview({commit, state},payload){
        let res = await getClassImageList(payload);
        let data = await reconstructionList(res.data.List);
        let arr = data.map(item => {
            return item.Url.replace('{0}', item.HighSize)
        })

   
        
        // 设置 图片 总数
        commit('imgCount', res.data.Count)
        //  创建一个数组，如果 state.allImgList 有数组，那么就等于 allImgList 否则为空数组
        let list = state.allImgList || []
        console.log(list)
        console.log(data)
        // 拼接
        let newList = list.concat(data)
        // 设置 所有图片的数组
        console.log(newList)
        // commit('allImgList', newList)
        // 获取数组总数
        let arrLen = newList.length 
        commit('setArrLen', arrLen)

        await commit('reconstructionPreviewList',data);
        await commit('setPreviewIndex',payload.Index);
        await commit('showImagePreview');
    },

    async concatPreviewList({commit},payload){
        let res = await getClassImageList(payload);
        let data = await reconstructionList(res.data.List);

        await commit('reconstructionPreviewList',data);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}