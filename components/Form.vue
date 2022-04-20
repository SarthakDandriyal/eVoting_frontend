<template>
  <v-form>
      <br/>
      <h2>Add Election</h2>
      <br/>
      <v-text-field v-model="electionname"  label="Election Name"></v-text-field>
      <v-text-field v-model="stime"  label="Start Time"></v-text-field>
      <v-text-field v-model="etime" label="End Time"></v-text-field>
      <v-text-field v-model="voterscount" label="Voters Count"></v-text-field>
     <v-btn @click="submit({electionname,stime,etime,voterscount})">Submit</v-btn>
  </v-form>
</template>          { text: 'End Time', value: 'etime' },
          { text: 'Voters Count', value: 'voterscount' },

<script>  
export default {
    computed:{
        electionname:{
            get(){
            
               return this.$store.state.user.electionname;
            },
            set(value){
                console.log(value)
                this.$store.commit("user/storeElection_Name",value)
            },
        },
        stime:{
            get(){
               
               return this.$store.state.user.stime;
            },
            set(value){
                this.$store.commit("user/storeStart_Time",value)
            },
        },
        etime:{
            get(){
                return this.$store.state.user.etime;
            },
            set(value){
                this.$store.commit("user/storeEnd_Time",value)
            },
        },

        voterscount:{
            get(){
                return this.$store.state.user.voterscount;
            },
            set(value){
                this.$store.commit("user/storeVoters_Count",value)
            },
        },
    },
    methods:{
       async submit(user){
           console.log(user);
            await this.$axios.post("http://localhost:8083/election/",user);
        
      await  this.restForm({Election_Name:"",Start_Time:"",End_Time:"",Voters_Count:0});

        this.$store.commit(
         "users/storeData",
         (await this.$axios.get("http://localhost:8083/election/")).data

     );
  
    },
    restForm(user){
        this.$store.commit("user/storeElection_Name",user.Election_Name);
        this.$store.commit("user/storeStart_Time",user.Start_Time);
        this.$store.commit("user/storeEnd_Time",user.End_Time);
        this.$store.commit("user/storeVoters_Count",user.Voters_Count);
         
    },


 },
};
</script>

<style> 

</style>