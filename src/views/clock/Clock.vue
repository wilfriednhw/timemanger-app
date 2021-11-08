<template>
  <div class="layout">
    <h2 class="label">Clock ({{ new Date().toLocaleDateString("fr") }})</h2>
    <div class="card clock_view">
      <h2 style="margin-bottom: 30px" class="label">
        {{ new Date().toLocaleDateString("fr") }}
      </h2>

      <div class="clock_infos">
        <div>
          <h3 class="title label">Started at:</h3>
          <h2>08h05</h2>
        </div>

        <div>
          <h3 class="title label">Ended at:</h3>
          <h2>14h05</h2>
        </div>
      </div>

      <div
        style="
          width: 30%;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        "
      >
        <div class="btn_clock btn_start">
          <span>START</span>
        </div>

        <div class="btn_clock btn_stop">
          <span>STOP</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "../../assets/images/logo.png";

export default {
  name: "Dashboard",
  data() {
    return {
      logo,
    };
  },
  methods: {},
};
</script>
