<template>
  <div v-cloak v-if="displayCountDown">
    <div v-if="isLive && !ended">
      <h2>Election started</h2>
      <h2>Election ends in:</h2>

      <section>
        <section class="timer">
          <div>
            <section>
              <p>{{ days }}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{{ hours }}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{{ minutes }}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{{ seconds }}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
      </section>
      <div v-if="isLive && !ended" class="h-500 center-v center-h">
        <v-btn @click="submit({ n })" v-for="n in p.data" v-bind:key="n"
          >Candidate{{ n }}</v-btn
        >
      </div>
    </div>
    <div  v-else-if="!isLive && !ended">
      <h2>Election starts in:</h2>

      <section >
        <section class="timer">
          <div>
            <section>
              <p>{{ days }}</p>
              <p>
                <small>Days</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{{ hours }}</p>
              <p>
                <small>Hours</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{{ minutes }}</p>
              <p>
                <small>Minutes</small>
              </p>
            </section>
            <span>:</span>
            <section>
              <p>{{ seconds }}</p>
              <p>
                <small>Seconds</small>
              </p>
            </section>
          </div>
        </section>
      </section>
    </div>
    <div v-else>
      <h2>Election ended</h2>
    </div>
  </div>
</template>
	 
	<script>
export default {
layout: 'start_election_layout',
  name: "CountDownTimer",
  created() {
    this.startTimer();
  },
  data() {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      displayCountDown: false,
      p: 0,
    };
  },

  computed: {
    isLive: {
      get() {
        return this.$store.state.electionstate.isLive;
      },
      set(value) {
        this.$store.commit("electionstate/storeisLive", value);
      },
    },
    ended: {
      get() {
        return this.$store.state.electionstate.ended;
      },
      set(value) {
        this.$store.commit("electionstate/storeended", value);
      },
    },
  },

  methods: {
    async startTimer() {
      this.ended = false;
      const d = await this.$axios.get("http://localhost:8083/election/E1");
      console.log(d.data[0].stime);
      console.log(this.isLive + " " + this.ended);
      const countdownDate = d.data[0].stime - 19800000;
      // new Date("January 11, 2022 7:59:00").getTime();
      //  console.log(countdownDate);
      let self = this;
      let interval = setInterval(() => {
        const d1 = new Date();
        // console.log(d1.getHours())
        const distance = countdownDate - d1.getTime();

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance <= 0) {
          self.isLive = true;

          clearInterval(interval);

          this.endTimer();
        } else {
          self.days = days;
          self.hours = hours;
          self.minutes = minutes;
          self.seconds = seconds;
        }
        self.displayCountDown = true;
      }, 1000);
    },

    async endTimer() {
      const d = await this.$axios.get("http://localhost:8083/election/E1");
      console.log(d.data[0].etime);

      const countdownDate = d.data[0].etime - 19800000;
      // new Date("January 11, 2022 7:59:00").getTime();
      // console.log(countdownDate);
      //console.log(this.ended)
      let self = this;
      let interval = setInterval(() => {
        const d1 = new Date();
        // console.log(d1.getHours())
        const distance = countdownDate - d1.getTime();
        // console.log(distance);
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance <= 0) {
          this.isLive=false;
          this.ended=true;
          clearInterval(interval);
        } else {
          self.days = days;
          self.hours = hours;
          self.minutes = minutes;
          self.seconds = seconds;
        }
        self.displayCountDown = true;
      }, 1000);
    },

    async submit(val) {
      // console.log(val["n"]);
      var text = "c";
      var result = text.concat(val["n"]);
      var url = "http://localhost:8083/addVote/" + result;
      console.log(url);
      await this.$axios.post(url);
      await this.$axios.post("http://localhost:8083/voted");
      console.log("asdasd");
      this.$router.push("/VoteDone");
      
    },
  },

  async fetch() {
    this.p = await this.$axios.get("http://localhost:8083/candidatecount");
  },
};
</script>
	 
	<style scoped>
[v-cloak] {
  display: none;
}

.timer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.timer div:first-child {
  border: 1px solid white;
  border-radius: 3px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  margin-bottom: 1em;
  padding: 1em 1em 0 1em;
}

section p:first-child,
.timer div:last-child span {
  display: contents;
}

@media screen and (max-width: 480px) {
  .timer div:last-child {
    margin-left: 2em;
    margin-right: 2em;
  }
}

.text-animation {
  animation: color-change 5s infinite;
  font-weight: 400;
}

.center-h {
  display: flex; /* or display:grid */
  justify-content: center;
}

.h-500 {
  height: 500;
}

@keyframes color-change {
  0% {
    color: #00ffa3;
  }
  25% {
    color: yellow;
  }
  50% {
    color: #dc1fff;
  }
  75% {
    color: #f1a945;
  }
  100% {
    color: #00ffa3;
  }
}
</style>