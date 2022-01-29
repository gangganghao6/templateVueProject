<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import Test from "@/components/Test.vue";
import createMockServer from "@/util/mockUtil.ts";
import axios from "axios";
import { reactive, ref } from "vue";

let template: object = {
  users_array_20: {
    name_name: "",
    id_id: "",
    sex_boolean: "",
    text_cnstring: 10,
  },
};
let datas = reactive({
  users: [],
});
let iszhankai = ref(false);
let zhanshicover = ref(false);
createMockServer("http://localhost:3000/getUserInfo", "get", template);
axios.get("http://localhost:3000/getUserInfo").then((res) => {
  console.log(res.data.users);
  datas.users = reactive(res.data.users);
});

function change() {
  iszhankai.value = !iszhankai.value;
  zhanshicover.value = !zhanshicover.value;
}
</script>

<template>
  <div class="container">
    <div class="header"></div>
    <div
      :class="[
        'leftsidebar',
        iszhankai ? 'leftsidebarzhankai' : 'leftsidebarheshang',
      ]"
    ></div>
    <div
      :class="['cover', iszhankai ? 'coverzhanshi' : 'coverbuzhanshi']"
      @click="change"
    ></div>
    <div class="sidebar" @click="change"></div>
    <div class="content">
      <ul class="list">
        <li class="item" v-for="user in datas.users">{{ user }}</li>
      </ul>
    </div>
    <div class="footer"></div>
  </div>
</template>

<style lang="scss">
@import "./assets/style/base";

.container {
  font-size: 16px;
  display: grid;
  background-color: pink;
  //min-width: 800px;
  min-height: 100vh;
  grid-template-areas:
    "h h h h"
    "s c c c"
    "s c c c"
    "f f f f";
  grid-template-columns: 10vw 3fr 3fr 3fr;
  grid-template-rows: 5vh 5fr 5fr minmax(3vh, 7vh);
}

.header {
  background-color: green;
  grid-area: h;
  position: fixed;
  width: 100%;
  height: 7vh;
  top: 0;
}

.footer {
  background-color: rebeccapurple;
  grid-area: f;
}

.sidebar {
  background-color: sandybrown;
  grid-area: s;
}

.content {
  background-color: paleturquoise;
  grid-area: c;
}

.list {
  display: flex;
  flex-direction: column;
}

.item {
  flex-basis: 50px;
  line-height: 50px;
  background-color: darkturquoise;
}

.leftsidebar {
  position: fixed;
  height: 100%;
  background-color: blue;
  transition: width 0.4s;
  z-index: 2;
}

.leftsidebarzhankai {
  width: 30vw;
}

.leftsidebarheshang {
  width: 0vw;
}

.cover {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  transition-property: background-color, opacity, visibility;
  transition-delay: 0s, 0s, 0s;
  transition-duration: 0.4s, 0.4s, 0.4s;
}

.coverzhanshi {
  visibility: visible;
  opacity: 1;
}

.coverbuzhanshi {
  visibility: hidden;
  opacity: 0;
}
</style>
