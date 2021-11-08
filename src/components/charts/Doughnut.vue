<script>
import { Doughnut } from "vue-chartjs";

export default {
  extends: Doughnut,
  props: ["durations"],

  mounted() {
    // console.log(this.durations);
    this.render();
  },

  methods: {
    render() {
      this.renderChart(
        {
          labels: [
            "John Doe",
            "Addy Osmani",
            "Dan Abramov",
            "Alessandro Ferrari",
            "Wilfried NHW",
            "Roman Birkov",
            "Ludo calibre",
          ],
          datasets: [
            {
              backgroundColor: [
                "tomato",
                "green",
                "#00D8FF",
                "orange",
                "blue",
                "gray",
                "black",
              ],
              data: this.durations,
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,

          tooltips: {
            enabled: true,
          },
        }
      );
    },
  },

  watch: {
    data: function () {
      this.render();
    },
  },
};
</script>
