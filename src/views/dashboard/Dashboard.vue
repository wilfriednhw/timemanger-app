<template>
  <div class="layout">
    <div
      style="
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      "
    >
      <h2 style="margin-bottom: 20px" class="label">Dashboard</h2>

      <div style="width: 25%">
        <label class="input_bloc">
          <select class="input_text">
            <option>Select an employee</option>
            <option>Employee 1</option>
            <option>Employee 2</option>
            <option>Employee 3</option>
            <option>Employee 4</option>
          </select>
        </label>
      </div>
    </div>

    <div class="stats_row">
      <div class="stat_bloc card orange">
        <span class="label">Month</span>
        <span class="value">12h</span>
      </div>

      <div class="stat_bloc card blue">
        <span class="label">Week</span>
        <span class="value">55h</span>
      </div>

      <div class="stat_bloc card red">
        <span class="label">Supplements</span>
        <span class="value">4h</span>
      </div>

      <div class="stat_bloc card green">
        <span class="label">Night</span>
        <span class="value">3h</span>
      </div>
    </div>

    <div v-if="durations.length > 0" class="chart_bloc">
      <div class="card">
        <h4 style="margin-bottom: 20px" class="label">Weekly times recorded</h4>
        <BarChart v-bind:durations="durations" />
      </div>
      <div class="card">
        <h4 style="margin-bottom: 20px" class="label">Top 7 Employees</h4>
        <Doughnut v-bind:durations="durations" />
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/images/logo.png";
import Doughnut from "../../components/charts/Doughnut.vue";
import BarChart from "../../components/charts/BarChart.vue";
import dataChart from "../../components/charts/workingTimes.json";
import moment from "moment";

export default {
  components: { Doughnut, BarChart },
  name: "Dashboard",

  data() {
    return {
      logo,
      durations: [],
      durationsIsInit: true,
      allWorkingTimesUser: [],
    };
  },

  async mounted() {
    const data = await this.getUserWorkingTimes();
    const durations = await this.computeDurations(data);
    this.durations = durations;
  },

  methods: {
    getUserWorkingTimes() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(dataChart);
        }, 500);
      });
    },

    sortData(data) {
      return data.sort((a, b) => moment(a.start) - moment(b.start));
    },

    computeDurations(data) {
      const durationsOutput = [];
      return new Promise((resolve) => {
        for (let currentData of this.sortData(data)) {
          const { start, end } = currentData;
          const indexDay = new Date(start).getDay();
          const currentDuration = moment(end).diff(moment(start), "hours");
          durationsOutput[indexDay !== 0 ? indexDay - 1 : 6] = currentDuration;
        }
        resolve(durationsOutput);
      });
    },
  },
};
</script>
