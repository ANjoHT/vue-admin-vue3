<template>
  <div class="notFound">
    <img src="@/assets/img/401.gif" loop=infinite />
    <div class="text">
    <P>404!NOT!FOUND!</P>
  </div>
  </div>

</template>

<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.notFound {
  display: flex;
  position: absolute;
  top: 50%;
  transform: translate(-50%,-50%);
  flex-wrap: wrap;
  left: 50%;
  img {
    margin: 0 auto;
  }
  .text{
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 50px;
  }
}
</style>