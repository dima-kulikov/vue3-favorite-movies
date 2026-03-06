<script setup></script>

<template>
  <div class="background-img">
    <img src="../../assets/images/bg.jpg" alt="background" class="background" />
  </div>
</template>

<style lang="css" scoped>
.background-img {
  width: 100%;
  max-width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
}
.background-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.background-img::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 150px;
  background: linear-gradient(to top, #faebd7 0%, rgba(250, 235, 215, 0) 100%);
  pointer-events: none;
}
</style>
