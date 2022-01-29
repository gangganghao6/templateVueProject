<template>
  <div>用户名:{{ mainStore.name }}<br />长度:{{ mainStore.nameLength }}</div>
  <hr />
  <button @click="updateName">修改store中的name</button>
  <a-button shape="round" loading />
</template>

<script setup lang="ts">
import { useMainStore } from "@/store/main";

const mainStore = useMainStore();

const updateName = () => {
  // $patch 修改 store 中的数据
  mainStore.$patch({
    name: "名称被修改了,nameLength也随之改变了",
  });
};
</script>

<style scoped lang="scss">
div {
  background-color: $test-color;
}
</style>
