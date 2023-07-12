<script>
import { defineComponent, computed } from "vue";
export default defineComponent({
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
  },
  setup(props) {
    return {
      svgClass: computed(() => {
        if (props.className) {
          return `svg-icon ${props.className}`;
        }
        return "svg-icon";
      }),
    };
  },
});
</script>

<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :href="`#icon-${name}`" :fill="color" />
  </svg>
</template>

<style lang="scss" scoped>
.sub-el-icon,
.nav-icon {
  display: inline-block;
  font-size: 15px;
  margin-right: 12px;
  position: relative;
}
.svg-icon {
  width: 1em;
  height: 1em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
