<script setup lang="ts"></script>

<template>
  <div class="meet-item-container">
    <el-card header="会议室名称">
      <div class="card-content">
        <el-descriptions :column="1">
          <el-descriptions-item label="位置">北京</el-descriptions-item>
          <el-descriptions-item label="人数">10</el-descriptions-item>
        </el-descriptions>
      </div>
      <template #footer>
        <el-button type="primary" link>预定</el-button>
      </template>
    </el-card>
  </div>
</template>

<style lang="scss" scoped>
.meet-item-container {
  width: 200px;
}
</style>
