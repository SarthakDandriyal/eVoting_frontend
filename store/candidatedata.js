export const state =() =>({

    cId:"",
    name:"",
    votes:0
})

export const mutations ={
    storecId:(state,data) =>{
        state.cId=data
        console.log(data);
    },
    storename:(state,data) =>{
        state.name=data
        console.log(data);
    },
    storevotes:(state,data) =>{
        state.votes=0
    }
}