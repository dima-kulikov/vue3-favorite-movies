<script setup>
import { computed } from "vue";

const emit = defineEmits(["click"]);

const props = defineProps({
  isActive: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  theme: {
    type: String,
    default: "grey",
    validator: (theme) => ["green", "red", "yellow", "grey"].includes(theme),
  },
  size: {
    type: String,
    default: "lg",
    validator: (size) => ["sm", "lg"].includes(size),
  },
  count: {
    type: Number,
    default: 0,
  },
});

const colorClass = computed(() => {
  if (props.isActive) return "btn_green btn-active";
  switch (props.theme) {
    case "red":
      return "btn_red";
    case "green":
      return "btn_green";
    case "yellow":
      return "btn_yellow";
    default:
      return "btn_grey";
  }
});

const testColorClass = computed(() => {
  if (props.isActive) return "btn_text-dark";
  switch (props.theme) {
    case "red":
      return "btn_text-white";
    case "green":
      return "btn_text-dark";
    case "yellow":
      return "btn_text-dark";
    default:
      return "btn_text-white";
  }
});
</script>

<template>
  <button
    @click="$emit('click')"
    class="btn"
    :class="[colorClass, testColorClass, props.size]"
    :disabled="disabled"
    v-bind="$attrs"
  >
    <div v-if="props.count" class="btn-counter">{{ props.count }}</div>
    <slot />
  </button>
</template>

<style>
.btn {
  position: relative;
  border: none;
  width: 100px;
  height: 40px;
  font-size: 14px;
  border-radius: 10px;
  cursor: pointer;
  outline: 2px solid transparent;
  transition: all 0.3s ease;
  font-weight: 500;
}

.btn.sm {
  width: 60px;
  height: 25px;
  font-size: 12px;
  font-weight: 500;
}

.btn:hover {
  opacity: 0.8;
  outline: 2px solid #f7aa43;
}
.btn_green {
  background: #37df5c;
}
.btn_red {
  background: #ff0000;
}
.btn_yellow {
  background: #eeff00;
}
.btn_grey {
  background: #8a8989;
}
.btn_text-white {
  color: #fff;
}
.btn_text-dark {
  color: #181717;
}
.btn:disabled {
  opacity: 0.7;
  cursor: default;
  outline: 1px solid transparent;
}
.btn-active {
  cursor: default;
  outline: 1px solid transparent;
}
.btn:hover.btn-active {
  cursor: default;
  opacity: 1;
  outline: none;
}

.btn .btn-counter {
  position: absolute;
  top: -8px;
  right: -8px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #f7aa43;
  color: #000000;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
