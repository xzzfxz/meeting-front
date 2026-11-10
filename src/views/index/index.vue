<script setup lang="ts">
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const activeIndex = ref("meetingReserve");
const menuList = ref([
  { title: "会议室预约", name: "meetingReserve", path: "/" },
  { title: "我的预约", name: "myReserve", path: "/myReserve" },
  {
    title: "会议室管理",
    name: "meetingManagement",
    path: "/backend/meetingManagement",
    newWindow: true,
  },
]);

// 点击菜单跳转
const handleSelect = (key: string) => {
  const current = menuList.value.find((item) => item.name === key);
  if (current) {
    if (current.newWindow) {
      const routeData = router.resolve(current.path);
      window.open(routeData.href, "_blank");
    } else {
      router.push(current.path);
    }
  }
};

const initData = () => {
  // 获取当前路由
  activeIndex.value = route.name as string;
};
initData();
</script>

<template>
  <div class="index-container">
    <div class="menu-container">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">
        <el-menu-item v-for="item in menuList" :key="item.name" :index="item.name">
          {{ item.title }}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="router-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.index-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.menu-container {
  flex-shrink: 0;
}
.router-container {
  height: 1px;
  flex-grow: 1;
}
</style>
