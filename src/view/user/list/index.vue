<template>
  <div>
    <el-card style="width: 100%; margin-bottom: 20px; font-size: 15px;">
      <el-button type="primary">新增</el-button>
      <el-button type="danger">批量删除</el-button>
      <el-input style="width: 250px; margin: 0 10px;"></el-input>
      <el-button type="primary">
        搜索
        <el-icon style="margin-left: 2px;"><Search /></el-icon>
      </el-button>
    </el-card>
    <el-card>
      <vxe-grid v-bind="gridOption" ref="xGrid">
        <template #action_slot="{ row }">
          <el-button type="primary" @click="editRowEvent(row)">修改</el-button>
          <el-button type="danger">删除</el-button>
        </template>
        <template #edit_name="{ row }">
          <el-input v-model="row.name"></el-input>
        </template>
        <template #edit_sex="{ row }">
          <el-select v-model="row.sex">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </template>
        <template #edit_address="{ row }">
          <el-input v-model="row.address"></el-input>
        </template>
      </vxe-grid>
    </el-card>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"
  export default defineComponent({
    name:'',
  })
</script>

<script lang="ts" setup>
import { ref } from "vue"

const xGrid = ref()
const gridOption = {
  border: true,
  size: 'small',
  height: 600,
  columnConfig: {
    resizable: true
  },
  editConfig: {
    trigger: 'manual', 
    mode: 'row',
    // showStatus: true
  },
  pagerConfig: {
    enabled: true,
    total: 0,
    currentPage: 1,
    pageSize: 10,
    pageSizes: [10, 20, 50, 100, 200]
  },
  columns: [
    { type: 'checkbox', width: 50, align: 'center' },
    { field: 'name', editRender: {}, slots: { edit: 'edit_name' }, title: '用户名称' },
    { 
      field: 'sex', title: '性别', editRender: {}, 
      slots: { default: ({ row })=>{
        return row.sex === '1' ? '男' : '女'
      }, edit: 'edit_sex' } 
    },
    { field: 'address', editRender: {}, slots: { edit: 'edit_address' }, title: '地址' },
    { title: '操作', slots: { default: 'action_slot' } }
  ],
  data: [
    { id: 10001, name: 'Test1', nickname: 'T1', role: 'Develop', sex: '1', age: 28, address: 'Shenzhen' },
    { id: 10002, name: 'Test2', nickname: 'T2', role: 'Test', sex: '0', age: 22, address: 'Guangzhou' },
    { id: 10003, name: 'Test3', nickname: 'T3', role: 'PM', sex: '1', age: 32, address: 'Shanghai' },
    { id: 10004, name: 'Test4', nickname: 'T4', role: 'Designer', sex: '0', age: 23, address: 'Shenzhen' },
    { id: 10005, name: 'Test5', nickname: 'T5', role: 'Develop', sex: '0', age: 30, address: 'Shanghai' },
    { id: 10006, name: 'Test6', nickname: 'T6', role: 'Designer', sex: '0', age: 21, address: 'Shenzhen' },
    { id: 10007, name: 'Test7', nickname: 'T7', role: 'Test', sex: '1', age: 29, address: 'Shenzhen' },
    { id: 10008, name: 'Test8', nickname: 'T8', role: 'Develop', sex: '1', age: 35, address: 'Shenzhen' }
  ]
}

const editRowEvent = (row: any) => { xGrid.value && xGrid.value.setEditRow(row) }

</script>

<style scoped>

</style>