<template>
  <v-form>
    <br />
    <h2>Add Voter</h2>
    <br />
    <v-text-field v-model="voterid" label="Voter Id"></v-text-field>
    <v-text-field v-model="name" label="Name"></v-text-field>
    <v-text-field v-model="address" label="Address"></v-text-field>
    <v-text-field v-model="email" label="Email"></v-text-field>
    <v-btn @click="submit({ voterid, name, address, email })">Submit</v-btn>
    <br />
    <br />
    <v-card>
      <v-card-title>
        Voters List
        <v-spacer></v-spacer>
      </v-card-title>
      <v-data-table :headers="headers" :items="voters"> </v-data-table>
    </v-card>
  </v-form>
</template>

<script>
export default {
  middleware:'blocker',
  data() {
    return {
      headers: [
        { text: "Voter Id", value: "voterid" },
        { text: "Name", value: "name" },
        { text: "Address", value: "address" },
        { text: "Email", value: "email" },
      ],
    };
  },

  computed: {
    voterid: {
      get() {
        return this.$store.state.voterdata.voterid;
      },
      set(value) {
        console.log(value);
        this.$store.commit("voterdata/storeId", value);
      },
    },
    name: {
      get() {
        return this.$store.state.voterdata.name;
      },
      set(value) {
        this.$store.commit("voterdata/storeName", value);
      },
    },
    address: {
      get() {
        return this.$store.state.voterdata.address;
      },
      set(value) {
        this.$store.commit("voterdata/storeAddress", value);
      },
    },
    email: {
      get() {
        return this.$store.state.voterdata.email;
      },
      set(value) {
        this.$store.commit("voterdata/storeEmail", value);
      },
    },
    voters() {
      console.log(this.$store.state.users.data);
      return this.$store.state.users.data;
    },
  },

  async fetch() {
    this.$store.commit(
      "users/storeData",
      (await this.$axios.get("http://localhost:8083/voter")).data
    );
  },
  methods: {
    async submit(voter) {
  
      await this.$axios.post("http://localhost:8083/voter/", voter);

      await this.restForm({ voterid: "", name: "" ,address: "",email: ""});

      this.$store.commit(
        "users/storeData",
        (await this.$axios.get("http://localhost:8083/voter/")).data
      );
    },
    restForm(voterdata) {
      this.$store.commit("voterdata/storeId", voterdata.voterid);
      this.$store.commit("voterdata/storeName", voterdata.name);
      this.$store.commit("voterdata/storeAddress", voterdata.address);
      this.$store.commit("voterdata/storeEmail", voterdata.email);
    },
  },
};
</script>

<style>
</style>