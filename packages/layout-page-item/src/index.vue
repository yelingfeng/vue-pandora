<template>
  <section
    id="v_layout_page_item"
    class="v_layout_page_item"
    :class="{ page_item_no_margin: isNoMargin }"
  >
    <slot />
  </section>
</template>
<script>
export default {
  name: 'VLayoutPageItem',
  props: {
    isNoMargin: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.v_layout_page_item {
  padding: 16px;
  background: #fff;
  border-radius: 4px;
  &.page_item_no_margin {
    margin: 0;
    padding: 0;
  }
}
</style>
