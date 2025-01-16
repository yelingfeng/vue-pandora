# 一行展示多少项

---

<common-code-format>
  <docsComponents-VQueryCondition-widthSize slot="source"></docsComponents-VQueryCondition-widthSize>
  在组件中需开启: `isShowWidthSize`；不开启`isShowWidthSize`，则根据`width > 768 && width < 1280`展示3项，`width <= 768`展示2项(width=window.innerWidth)
  
  设置`widthSize`最小值2，最大值8，默认值4

<<< @/docs/.vuepress/components/docsComponents/VQueryCondition/widthSize.vue
</common-code-format>
