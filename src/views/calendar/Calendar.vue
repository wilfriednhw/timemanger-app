<template>
  <div class="layout">
    <h2 style="margin-bottom: 20px" class="label">Calendar</h2>

    <div class="text-center section card">
      <v-calendar
        class="custom-calendar max-w-full"
        :masks="masks"
        :attributes="attributes"
        disable-page-swipe
        is-expanded
      >
        <template v-slot:day-content="{ day, attributes }">
          <div class="flex flex-col h-full z-10 overflow-hidden">
            <span class="day-label text-sm text-gray-900">{{ day.day }}</span>
            <div class="flex-grow overflow-y-auto overflow-x-auto">
              <p
                v-for="attr in attributes"
                :key="attr.key"
                class="text-xs leading-tight rounded-sm p-1 mt-0 mb-1"
                :class="attr.customData.class"
              >
                {{ attr.customData.title }}
              </p>
            </div>
          </div>
        </template>
      </v-calendar>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      masks: {
        weekdays: "WWW",
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: "Lunch with mom.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: "Take Noah to basketball practice",
            class: "bg-blue-500 text-white",
          },
          dates: new Date(year, month, 2),
        },
        {
          key: 3,
          customData: {
            title: "Noah's basketball game.",
            class: "bg-blue-500 text-white",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: "Take car to the shop",
            class: "bg-indigo-500 text-white",
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: "Meeting with new client.",
            class: "bg-teal-500 text-white",
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Mia's gymnastics practice.",
            class: "bg-pink-500 text-white",
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: "Cookout with friends.",
            class: "bg-orange-500 text-white",
          },
          dates: { months: 5, ordinalWeekdays: { 2: 1 } },
        },
        {
          key: 7,
          customData: {
            title: "Mia's gymnastics recital.",
            class: "bg-pink-500 text-white",
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: "Visit great grandma.",
            class: "bg-red-600 text-white",
          },
          dates: new Date(year, month, 25),
        },
      ],
    };
  },
};
</script>
<style>
.flex-col {
  flex-direction: column;
}

.flex {
  display: flex;
}
.flex-grow {
  flex-grow: 1;
}
.h-full {
  height: 100%;
}
.bg-red-600 {
  background-color: #e53e3e;
}
.today {
  background-color: #d2e1ec;
}
.bg-teal-500 {
  background-color: #38b2ac;
}
.bg-pink-500 {
  background-color: #ed64a6;
}
.bg-indigo-500 {
  background-color: #667eea;
}
.overflow-y-scroll {
  overflow-y: scroll;
}
.overflow-x-auto {
  overflow-x: auto;
}
.z-10 {
  z-index: 10;
}
.overflow-hidden {
  overflow: hidden;
}
.text-gray-900 {
  color: #1a202c;
}
.vc-h-full {
  height: 100%;
}
.custom-calendar.vc-container {
  --day-border: 1px solid #b8c2cc;
  --day-border-highlight: 1px solid #b8c2cc;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: auto;
}
.custom-calendar.vc-container .vc-weeks {
  padding: 0;
  height: 80vh;
  grid-template-rows: 33px repeat(6, 1fr);
}
.custom-calendar.vc-container .vc-header {
  background-color: #f1f5f8;
  padding: 10px 0;
}
.custom-calendar.vc-container .vc-weekday {
  background-color: var(--weekday-bg);
  border-bottom: var(--weekday-border);
  border-top: var(--weekday-border);
  padding: 5px 0;
}
.vc-border {
  border-width: 1px;
}
.custom-calendar.vc-container .vc-day:not(.on-right) {
  border-right: var(--day-border);
}
.custom-calendar.vc-container .vc-day:not(.on-bottom) {
  border-bottom: var(--day-border);
}
.custom-calendar.vc-container .vc-day.weekday-1,
.custom-calendar.vc-container .vc-day.weekday-7 {
  background-color: #eff8ff;
}

.custom-calendar.vc-container .vc-day {
  padding: 0 5px 3px;
  text-align: left;
  /*min-height: var(--day-height);*/
  min-width: var(--day-width);
  background-color: #fff;
}
.vc-day {
  position: relative;
  min-height: var(--day-min-height);
  width: 100%;
  height: 100%;
  z-index: 1;
}
.text-center {
  text-align: center;
}
.section {
}
.max-w-full {
  max-width: 100%;
}
.bg-blue-500 {
  background-color: #4299e1;
}

.text-xs {
  font-size: 0.75rem;
}
.text-white {
  color: #fff;
}
.p-1 {
  padding: 0.25rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mt-0 {
  margin-top: 0;
}
.leading-tight {
  line-height: 1.25;
}
.rounded-sm {
  border-radius: 0.125rem;
}
::-webkit-scrollbar {
  width: 0px;
}
::-webkit-scrollbar-track {
  display: none;
}
</style>
