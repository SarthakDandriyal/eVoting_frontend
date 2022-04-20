<template>
  <v-form>
    <br />
    <h2>Add Candidate</h2>
    <br />
    <v-text-field v-model="cId" label="Candidate Id"></v-text-field>
    <v-text-field v-model="name" label="Candidate Name"></v-text-field>
    <v-btn @click="submit({ cId, name })">Submit</v-btn>
    <br />
    <br />
    <v-card>
      <v-card-title>
        Candidate List
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table :headers="headers" :items="candidates"> </v-data-table>
    </v-card>
  </v-form>
</template>

<script>
export default {
  middleware:'blocker',
  data() {
    return {
      headers: [
        { text: "Candidate Id", value: "cId" },
        { text: "Candidate Name", value: "name" },
      ],
    };
  },

  computed: {
    cId: {
      get() {
        return this.$store.state.candidatedata.cId;
      },
      set(value) {
        console.log(value);
        this.$store.commit("candidatedata/storecId", value);
      },
    },
    name: {
      get() {
        return this.$store.state.candidatedata.name;
      },
      set(value) {
        this.$store.commit("candidatedata/storename", value);
      },
    },
    candidates() {
     console.log(this.$store.state.users.data)
      return this.$store.state.users.data;
    },
  },
  async fetch() {
    this.$store.commit(
      "users/storeData",
      (await this.$axios.get("http://localhost:8083/candidate")).data
    );
  },
  methods: {
    async submit(candidate) {
      this.$store.state.candidatedata.votes = 0;
      console.log(candidate);
      await this.$axios.post("http://localhost:8083/candidate/", candidate);

      await this.restForm({ cId: "", name: "" });

         this.$store.commit(
         "users/storeData",
         (await this.$axios.get("http://localhost:8083/candidate/")).data

     );
  
    },
    restForm(candidatedata) {
      this.$store.commit("candidatedata/storecId", candidatedata.cId);
      this.$store.commit("candidatedata/storename", candidatedata.name);
    },
  },
};
</script>

<style>
</style>