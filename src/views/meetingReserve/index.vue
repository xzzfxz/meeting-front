<script setup lang="ts">
import { ref } from "vue";
import dayjs from "dayjs";
import { ElButton } from "element-plus";
import MeetItem from "./components/meetItem.vue";

const filterParams = ref({
  date: dayjs().format("YYYY-MM-DD"),
  timeRange: [] as string[],
  name: "",
  peopleNum: null,
});
</script>

<template>
  <div class="meeting-container">
    <div class="filter-container">
      <div class="filter-item">
        <el-date-picker
          v-model="filterParams.date"
          type="date"
          :clearable="false"
          placeholder="请选择日期"
        />
      </div>
      <div class="filter-item">
        <el-time-picker
          v-model="filterParams.timeRange"
          placeholder="选择时间范围"
          is-range
          range-separator="-"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        />
      </div>
      <div class="filter-item">
        <el-input v-model="filterParams.name" placeholder="会议室名称" />
      </div>
      <div class="filter-item">
        <el-input-number v-model="filterParams.peopleNum" placeholder="参会人数" />
      </div>
      <div class="filter-item">
        <el-button type="primary">查询</el-button>
      </div>
    </div>
    <div class="list-container">
      <div class="list-item">
        <MeetItem />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.meeting-container {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.filter-container {
  flex-shrink: 0;
}
.list-container {
  height: 1px;
  margin-top: 10px;
  flex-grow: 1;
}
</style>
