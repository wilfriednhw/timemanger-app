<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  props: {
    durations: {
      type: Array,
      required: true,
    },
  },

  computed: {
    chartData: function () {
      return this.durations;
    },
  },

  methods: {
    render: function () {
      this.renderChart(
        {
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Sadurday",
            "Sunday",
          ],
          datasets: [
            {
              label: "Total hours",
              backgroundColor: "#f87979",
              data: this.chartData,
            },
          ],
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  callback: (value) => {
                    return Math.round(value);
                  },
                },
              },
            ],
          },
          tooltips: {
            enabled: true,
            callbacks: {
              label: (tooltipItems) => {
                return `${tooltipItems.yLabel} H`;
              },
            },
          },
        }
      );
    },
  },

  watch: {
    durations: {
      deep: true,
      immediate: true,
      handler() {
        this.render();
      },
    },
  },

  mounted() {
    this.render();
  },
};
</script>
