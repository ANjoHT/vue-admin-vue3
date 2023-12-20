<template>
  <div>
    <div class="topData">
      <el-card>今日出库量</el-card>
      <el-card>今日入库量</el-card>
      <el-card>年利润</el-card>
      <el-card>月利润</el-card>
    </div>
    <el-card style="margin-top: 20px;">
      <div>年利润</div>
      <div ref="yearProfit" id="yearProfit" style="width: 100%;height:400px;"></div>
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
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const yearProfit = ref(null)
onMounted(() => {
  const chart = echarts.init(yearProfit.value)
  const options = {
    xAxis: {
      type: 'category',
      data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [12, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
        type: 'bar',
      },
    ],
  }
  chart.setOption(options)
})

</script>

<style lang="scss" scoped>
.topData {
  display: flex;
  justify-content: space-between;
  .el-card {
    width: 20%;
  }
}
</style>