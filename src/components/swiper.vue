<template>
  <div class="details">
    <div class="swiperBox">
      <el-carousel :autoplay="false" ref="swiperRef">
        <el-carousel-item
          v-for="(item, index) in imgList"
          :key="index"
          :name="`${index}`"
        >
          <img style="width: 100%; height: 100%" :src="item" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="arrowBox">
      <div
        class="iconBox"
        :style="swiperAct == 0 ? 'pointer-events: none' : ''"
        @click="arrowBold('left')"
      >
        <el-icon><ArrowLeftBold /></el-icon>
      </div>
      <div class="imgWrap">
        <div class="imgBox" id="imgBox" ref="imgBoxRef">
          <div
            class="img"
            :id="`img${index}`"
            :style="
              swiperAct == index
                ? 'border: 2px solid #eb0045;'
                : 'border: 2px solid #f8f8f8;'
            "
            v-for="(item, index) in imgList"
            :key="index"
            @click="arrowClick(index)"
          >
            <img style="width: 100%; height: 100%" :src="item" />
          </div>
        </div>
      </div>
      <div
        class="iconBox"
        :style="swiperAct == imgList.length - 1 ? 'pointer-events: none' : ''"
        @click="arrowBold('right')"
      >
        <el-icon><ArrowRightBold /></el-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, toRefs, ref, onMounted, onUnmounted } from "vue";

const swiperRef = ref();
const imgBoxRef = ref();

let data = reactive({
  imgList: [
    "https://5b0988e595225.cdn.sohucs.com/images/20200430/fe07a3826cb548ad9d9dd1ac1b59b26e.jpeg",
    "https://p4.itc.cn/images01/20210414/348f8b1417d3490891ae8cefda30466f.jpeg",
    "https://image.uc.cn/s/wemedia/s/upload/2021/496ac52bdaab446a7993e6507ecef696.jpg",
    "https://gss0.baidu.com/-Po3dSag_xI4khGko9WTAnF6hhy/zhidao/pic/item/ae51f3deb48f8c546fe467cd3b292df5e0fe7f19.jpg",
    "https://p3.toutiaoimg.com/origin/pgc-image/8bb2a8d88e474410b2fd9bc0106c7425?from=pc",
    "https://p7.itc.cn/images01/20201001/501434b4b09a4500bad79cb401572fc5.jpeg",
    "https://img0.baidu.com/it/u=1275095085,1961143463&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
    "https://img2.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=120&f=JPEG?w=751&h=500",
    "https://img0.baidu.com/it/u=1049144354,3589714554&fm=253&fmt=auto&app=120&f=JPEG?w=1280&h=800",
  ],
  swiperAct: 0,
});

let { imgList, swiperAct } = toRefs(data);
// 鼠标点击事件
let clickHandle = (e: any) => {
  if (e.x <= 518) {
    // 调用方法向左滑动
    scrollRight("left");
  }
  if (e.x >= 660) {
    // 调用方法向右滑动
    scrollRight("right");
  }
};
// 选中的图片索引
let arrowClick = (index: any) => {
  swiperRef.value.setActiveItem(index);
  swiperAct.value = index;
};
// 上下切换图片
let arrowBold = (type: any) => {
  let value: any;
  if (type == "left") {
    value = swiperAct.value - 1;
    scrollRight("left");
  }
  if (type == "right") {
    value = swiperAct.value + 1;
    scrollRight("right");
  }
  // 现实具体图片
  swiperRef.value.setActiveItem(value);
  // 当前现实的图片
  swiperAct.value = value;
};
/**
 * 左右移动事件
 * @param type 向左/右移动
 */
let scrollRight = (type?: any) => {
  /**
   * @param 618 可视化宽度 最大的盒子
   * @param 5 可视化中现实数量
   * @param imgList 数组长度
   */
  const allLength = Math.floor((618 / 5) * imgList.value.length);
  // 获取包裹商品卡片的div盒子的宽度
  const boxLength = imgBoxRef.value.clientWidth;
  // 数组总长度比大盒子的宽度还要小
  if (allLength < boxLength) return;
  // 获取包裹商品卡片的div盒子
  const listEl = imgBoxRef.value;
  // 获取定位的 left 值
  const rightMove = Math.abs(parseInt(window.getComputedStyle(listEl)?.left));
  /**
   * @param rightMove 定位的 left 值
   * @param boxLength 包裹商品卡片的div盒子的宽度
   * @param 124 是单个商品卡片的宽度
   * @param allLength 可视化宽度 最大的盒子
   */
  if (rightMove + boxLength + 124 > allLength) {
    if (type == "left") {
      listEl.style.left = "-" + (rightMove - 124) + "px";
    } else {
      listEl.style.left = "-" + (allLength - boxLength) + "px";
    }
  } else {
    if (type == "left") {
      if (rightMove - 124 < 124) {
        listEl.style.left = "0px";
      } else {
        listEl.style.left = "-" + (rightMove - 124) + "px";
      }
    } else {
      listEl.style.left = "-" + (rightMove + 124) + "px";
    }
  }
};

onMounted(() => {
  // 可视化宽度 最大的盒子 添加点击事件
  imgBoxRef.value.addEventListener("click", clickHandle);
});
onUnmounted(() => {
  // 可视化宽度 最大的盒子 移除点击事件
  if (imgBoxRef.value) {
    imgBoxRef.value.removeEventListener("click", clickHandle);
  }
});
</script>

<style scoped lang="scss">
.details {
  margin-top: 50px;
  .arrowBox {
    display: flex;
    margin-top: 32px;
    height: 90px;
    align-items: center;
    width: 698px;
    .imgWrap {
      flex: 1;
      height: 90px;
      position: relative;
      margin: 0 10px;
      overflow: hidden;
      .imgBox {
        width: 100%;
        height: 90px;
        white-space: nowrap;
        position: absolute;
        left: 0px;
        transition: all 0.3s;
        .img {
          cursor: pointer;
          display: inline-block;
          width: 114px;
          height: 90px;
          margin-right: 12px;
          box-sizing: border-box;
        }
        .img:last-child {
          margin-right: 0;
        }
      }
    }
    .iconBox {
      line-height: 90px;
      width: 30px;
      height: 100%;
      background: #9f9f9f;
      color: #fff;
      text-align: center;
      cursor: pointer;
    }
    .iconBox:hover {
      background: #232836;
    }
  }
  .swiperBox {
    width: 698px;
    height: 400px;
    border-radius: 6px;
    overflow: hidden;
    :deep(.el-carousel) {
      height: 100%;
    }
    :deep(.el-carousel__container) {
      height: 100%;
    }
    :deep(.el-carousel__indicators) {
      display: none;
    }
    :deep(.el-carousel__arrow) {
      display: none;
    }
    .el-carousel__item h3 {
      color: #475669;
      opacity: 0.75;
      height: 100%;
      line-height: 400px;
      margin: 0;
      text-align: center;
    }
    .el-carousel__item:nth-child(2n) {
      background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n + 1) {
      background-color: #d3dce6;
    }
  }
}
</style>
