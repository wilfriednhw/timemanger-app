<template>
  <div class="navbar">
    <router-link to="/">
      <div class="logo_bloc">
        <img :src="logo" alt="logo" />
        <span class="label">Time Manager</span>
      </div></router-link
    >

    <div class="menu">
      <div class="menu_item">
        <div>
          <router-link to="/groups"
            ><img :src="group_icon" alt=""
          /></router-link>
        </div>
        <div v-if="currentRouteName == 'groups'" class="menu_active"></div>
      </div>

      <div class="menu_item">
        <div style="height: 35px">
          <router-link to="/users"
            ><img :src="users_icon" alt=""
          /></router-link>
        </div>
        <div v-if="currentRouteName == 'users'" class="menu_active"></div>
      </div>

      <div class="menu_item">
        <div>
          <router-link to="/clock"
            ><img :src="clock_icon" alt=""
          /></router-link>
        </div>
        <div v-if="currentRouteName == 'clock'" class="menu_active"></div>
      </div>

      <div class="menu_item">
        <div>
          <router-link to="/calendar"
            ><img :src="calendar_icon" alt=""
          /></router-link>
        </div>

        <div v-if="currentRouteName == 'calendar'" class="menu_active"></div>
      </div>
    </div>

    <div class="user">
      <span class="label">John Doe</span>
      <router-link to="/login">
        <img :src="logout_icon" alt="logout" />
      </router-link>
    </div>
  </div>
</template>

<script>
import logo from "../assets/images/logo.png";
import group_icon from "../assets/images/group_icon.png";
import users_icon from "../assets/images/users_icon.png";
import clock_icon from "../assets/images/clock_icon.png";
import calendar_icon from "../assets/images/calendar_icon.png";
import logout_icon from "../assets/images/logout_icon.png";

export default {
  name: "Navbar",
  data: function () {
    return {
      logo,
      group_icon,
      users_icon,
      clock_icon,
      calendar_icon,
      logout_icon,
    };
  },

  computed: {
    currentRouteName() {
      console.log(this.$route.name);
      return this.$route.name;
    },
  },
  // props: {
  //   msg: String,
  // },
};
</script>
