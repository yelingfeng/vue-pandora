# VTreeSelect 下拉树形结构组件

---

## 单选

<common-code-format>
  <docsComponents-VTreeSelect-index slot="source"></docsComponents-VTreeSelect-index>
  在组件中需配置：<br/>
`defaultData` 默认值显示；类型Object且必须是{id:**,label:***}<br/>
`@handleNodeClick` 获取当前选中项；类型Object

<<< @/docs/.vuepress/components/docsComponents/VTreeSelect/index.vue
</common-code-format>

## 多选

<common-code-format>
  <docsComponents-VTreeSelect-multiple slot="source"></docsComponents-VTreeSelect-multiple>
  在组件中需配置：<br/>
`multiple` 开启多选<br/>
`defaultValue` 默认值显示；类型Array<br/>
`@handleNodeClick` 获取当前选中项集合；类型Array

<<< @/docs/.vuepress/components/docsComponents/VTreeSelect/multiple.vue
</common-code-format>
