import { ref, reactive, onMounted, onUnmounted } from "vue";

export function useScreenSizes() {
  const width = ref(window.innerWidth);

  const screenWidth = reactive({
    isMoreThan360: width.value > 360,
    isMoreThan480: width.value > 480,
    isMoreThan768: width.value > 768,
  });

  const updateWidth = () => {
    width.value = window.innerWidth;
    screenWidth.isMoreThan360 = width.value > 360;
    screenWidth.isMoreThan480 = width.value > 480;
    screenWidth.isMoreThan768 = width.value > 768;
  };

  onMounted(() => {
    window.addEventListener("resize", updateWidth);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
  });

  return { screenWidth };
}
