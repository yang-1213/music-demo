<template>
  <article>
    <div class="loading">
      <div v-for="index in 5" class="round" :key="index"></div>
    </div>
  </article>
</template>
<script>
  export default {};
</script>
<style lang="less" scoped>
  /* loading动画 */
  .loading {
    display: flex;
    width: 100%;
    height: 7rem;
    justify-content: space-around;
    align-items: flex-end;

    .round {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
      background-color: #00a4ff;
      animation: loading 1.5s linear infinite;
    }

    /* loading动画 */
    @keyframes loading {
      to,
      from {
        transform: translateY(0);
      }

      50% {
        transform: translateY(-1rem);
      }
    }

    .delay(@time) {
      animation-delay: @time;
    }

    .round:nth-of-type(4) {
      .delay(0.2s);
      background-color: skyblue;
    }

    .round:nth-of-type(3) {
      .delay(0.4s);
      background-color: red;
    }

    .round:nth-of-type(2) {
      .delay(0.6s);
      background-color: aquamarine;
    }

    .round:nth-of-type(1) {
      .delay(0.8s);
      background-color: darksalmon;
    }
  }
</style>
