<template>
  <div class="petList">
    <div class="title">萌宠列表</div>
    <el-card class="query_card" shadow="hover">
      <div class="query">
        <div class="search">
          <div class="label">宠物id</div>
          <el-input v-model="queryParams.petId"></el-input>
        </div>
        <div class="search">
          <div class="label">宠物名字</div>
          <el-input v-model=" queryParams.petName"></el-input>
        </div>
        <div class="search">
          <div class="label">主人名字</div>
          <el-input v-model="queryParams.masterName"></el-input>
        </div>
        <div class="search">
          <div class="label">宠物状态</div>
          <el-select v-model="queryParams.petStatus">
            <el-option :key="0" :value="0" label="出院">出院</el-option>
            <el-option :key="1" :value="1" label="入院">入院</el-option>
          </el-select>
        </div>
        <div class="search_btn">
          <el-button type="primary" @click="query">查询</el-button>
          <el-button @click="reset">重置</el-button>
        </div>
      </div>
    </el-card>
    <el-card style="margin-top:20px" shadow="hover">
      <div class="dataTable">
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column prop="petId" label="id" />
          <el-table-column prop="petName" label="宠物名字" />
          <el-table-column label="宠物图片">
            <template #default="scoped">
              <img :src="scoped.row.petImage" />
            </template>
          </el-table-column>
          <el-table-column prop="petMaster" label="主人名字" />
          <el-table-column prop="petAge" label="宠物年龄" />
          <el-table-column prop="petBreed" label="宠物品种" />
          <el-table-column label="状态">
            <template #default="scoped">
              <el-button v-if="scoped.row.status" type="danger">出院</el-button>
              <el-button v-else type="primary">出院</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          class="pagination"
          background
          layout=" prev, pager, next, jumper, sizes,total"
          :total="total"
          :page-sizes="[10, 20, 50, 100]"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from "vue";
import { getPetList } from "@/api/apis";

const tableData = ref([]);
const total = ref(0);
const queryParams = reactive({
  pageNum: 1,
  pageSize: 10,
  petId: "",
  petName: "",
  petStatus: "",
  masterName: ""
});

const handleSizeChange = (val: number) => {
  queryParams.pageSize = val;
  getPageList(queryParams);
};

const handleCurrentChange = (val: number) => {
  queryParams.pageNum = val;
  console.log(val);

  getPageList(queryParams);
};

const getPageList = queryParams => {
  return getPetList(queryParams).then((res: any) => {
    if (res.success) {
      tableData.value = res.records.data;
      total.value = parseInt(res.records.total);
    }
  });
};
const query = () => {
  queryParams.pageNum = 1;
  getPageList(queryParams);
};
const reset = () => {
  queryParams.masterName='';
  queryParams.petId='';
  queryParams.petName='';
  queryParams.petStatus='';
};
onMounted(() => {
  getPageList(queryParams);
});
</script>

<style lang="scss" scoped>
.petList {
  .title {
    margin: 20px;
    margin-left: 0;
    font-weight: bold;
    font-size: 20px;
  }

  .query_card {
    display: flex;
    align-items: center;
    .query {
      display: flex;
      .search {
        display: flex;
        width: 220px;
        justify-content: center;
        align-items: center;
        align-content: center;
        margin-right: 20px;

        .label {
          flex-wrap: nowrap;
          font-size: 15px;
          margin-right: 5px;
          width: 60%;
          text-align: center;
        }
        .el-input {
        }
      }
    }
  }

  .dataTable {
    .el-pagination {
      margin-top: 20px;
      justify-content: center;
    }
  }
}
</style>