<template>
  <div>
    <el-card style="width: 100%; margin-bottom: 20px; font-size: 15px;">
      <el-form-item label="查询商品">
        <el-input style="width: 250px; margin-right: 8px;"></el-input>
        <el-button type="primary">
          搜索
          <el-icon style="margin-left: 2px;"><Search /></el-icon>
        </el-button>
      </el-form-item>
    </el-card>
    <el-card>
      <vxe-table border align="center" size="mini" :data="[{}, {}]" style="width: 100%; height: 100%;" show-overflow :row-config="{ height: 40 }">
        <vxe-column type="checkbox" width="50px"></vxe-column>
        <vxe-column title="商品编号" field="title"></vxe-column>
        <vxe-column title="商品名称" field="title"></vxe-column>
        <vxe-column title="商品数量" field="title"></vxe-column>
        <vxe-column title="是否显示"></vxe-column>
        <vxe-column title="是否必填"></vxe-column>
        <vxe-column title="操作">
          <template #default="{ row }">
            <el-button size="small" @click="outWare(row)">出库</el-button>
            <el-button size="small">入库</el-button>
          </template>
        </vxe-column>
      </vxe-table>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: '',
})
</script>

<script lang="ts" setup>

const outWare = (row: any) => { 
  console.log(row)
}
</script>

<style scoped></style>