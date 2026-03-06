<script setup>
import { defineAsyncComponent } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: "60px",
  },
  height: {
    type: String,
    default: "60px",
  },
  rotate: {
    type: String,
    default: "0",
  },
  colorClass: {
    type: String,
    default: "",
  },
  isNeedPointer: {
    type: Boolean,
    default: false,
  },
});

const name = defineAsyncComponent(() =>
  import(`../../assets/icons/${props.name}.svg`),
);
</script>

<template>
  <component
    :is="name"
    class="icon"
    :class="[props.colorClass, { pointer: props.isNeedPointer }]"
    :style="{ width, height, transform: `rotate(${props.rotate}deg)` }"
  />
</template>

<style>
.icon {
  color: white;
  transition: color 0.3s;
}
.icon.pointer {
  cursor: pointer;
}

.icon.--red {
  color: red;
}

.icon:hover {
  color: #f7aa43;
}

.custom-prev.swiper-button-disabled .icon,
.custom-next.swiper-button-disabled .icon {
  opacity: 0.2;
  cursor: auto;
  color: white;
}

svg {
  width: 100%;
  height: 100%;
}
</style>
