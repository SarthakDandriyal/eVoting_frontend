export const state =() =>({

    isadmin:false,
})

export const mutations ={
    storeisadmin:(state,data) =>{
        state.isadmin=data
        console.log(data);
    }

}