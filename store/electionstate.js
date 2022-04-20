export const state =() =>({

    isLive:false,
    ended:false,
})

export const mutations ={
    storeisLive:(state,data) =>{
        state.isLive=data
        console.log(data);
    },
    storeended:(state,data) =>{
        state.ended=data
        console.log(data);
    }

}