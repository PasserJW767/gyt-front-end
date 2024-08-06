<template>

  <div class="CustToast"
       :class="type"
       v-if="showToast">
    {{ message }}
  </div>

</template>

<script>
export default {
  /**
   * 自己封装的Toast v0.2
   * params: showToast Boolean 是否激活toast 默认 false
   * params: type String       toast提示类型 共normal success，fail，warning 四个选项 默认normal
   * params: message String    toast消息
   * params: duration Number      toast显示时间 默认 3000ms
   * */
  name: "CustToast",
  data() {
    return {
      showToast: true,
      type: "normal",
      message: "消息提示",
      duration: 3000
    }
  },
}
</script>

<style scoped>
.CustToast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.57);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  animation: show-toast .2s;
  color: aliceblue;
  overflow: hidden;
  display: flex;
  align-items: center;
}

@keyframes show-toast {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
