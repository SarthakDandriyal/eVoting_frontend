export const state =() =>({

    electionname:"",
    stime:"",
    etime:"",
    voterscount:0
})

export const mutations ={
    storeElection_Name:(state,data) =>{
        state.electionname=data
        console.log(data);
    },
    storeStart_Time:(state,data) =>{
        state.stime=data
        console.log(data);
    },
    storeEnd_Time:(state,data) =>{
        state.etime=data
        console.log(data);
    },
    storeVoters_Count:(state,data) =>{
        state.voterscount=data
        console.log(data);
    },
    
}