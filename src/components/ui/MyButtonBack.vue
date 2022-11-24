<template>
  <div class="btm jbm-300">
      <div><img alt="arrow_left_small" src="@/assets/img/icon/arrow_left_small.svg" /></div>
      <div class="title">{{t("back")}}</div>
    </div>
</template>

<script>
export default {
  name: "MyButtonBack",
};
</script>

<style scoped>
.btm {
  height: 18px;
  margin: 0 0 32px 32px;
  display: flex;
  cursor: pointer;
  width: 52px;
}

.numb {
  margin-top: 32px;
  height: 18px;
  text-align: left;
}

.title {
  margin-left: 8px;
}
</style>