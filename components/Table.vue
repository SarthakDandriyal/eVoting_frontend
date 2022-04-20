<template>
  <v-card>
      <v-card-title>
        Election List  
      <v-spacer></v-spacer>
       </v-card-title>
       
    <v-data-table
    :headers="headers"
    :items="users">
  </v-data-table>
  </v-card>
</template>

<script>
  export default {
    data () {
      return {
        headers: [

          { text: 'Election Name', value: 'electionname' },
          { text: 'Start Time', value: 'stime' },
          { text: 'End Time', value: 'etime' },
          { text: 'Voters Count', value: 'voterscount' },
        ],
      }
    },
    computed:{
        users(){
           console.log(this.$store.state.users.data)
            return this.$store.state.users.data;
        }
    },
    async fetch(){

        this.$store.commit(
            "users/storeData",
            (await this.$axios.get("http://localhost:8083/election")).data
        )

       
    }
  }
</script>

<style>

</style>