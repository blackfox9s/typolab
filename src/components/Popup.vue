<template>
  <transition name="modal">
    <div class="modal-mask" v-if="open">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-content">
            <slot name="body"></slot>
          </div>
          <div class="modal-footer">
            <slot name="footer"></slot>
            <button v-if="footerClose" type="button" @click="handleOpenClose()">닫기</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PopupBox',
  props: {
    footerClose: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    handleOpenClose() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>

</style>
