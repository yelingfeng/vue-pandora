# VDetail 组件

---

## 基础用法

<common-code-format>
  <docsComponents-VDetail-base slot="source"></docsComponents-VDetail-base>

<<< @/docs/.vuepress/components/docsComponents/VDetail/base.vue
</common-code-format>

## 加边框

<common-code-format>
  <docsComponents-VDetail-border slot="source"></docsComponents-VDetail-border>
  
<<< @/docs/.vuepress/components/docsComponents/VDetail/border.vue
</common-code-format>

## 每行展示多少项

<common-code-format>
  <docsComponents-VDetail-descColumn slot="source"></docsComponents-VDetail-descColumn>
  
<<< @/docs/.vuepress/components/docsComponents/VDetail/descColumn.vue
</common-code-format>

## 垂直布局

<common-code-format>
  <docsComponents-VDetail-vertical slot="source"></docsComponents-VDetail-vertical>
  
<<< @/docs/.vuepress/components/docsComponents/VDetail/vertical.vue
</common-code-format>

## 插槽显示

<common-code-format>
  <docsComponents-VDetail-slotName slot="source"></docsComponents-VDetail-slotName>
  
<<< @/docs/.vuepress/components/docsComponents/VDetail/slotName.vue
</common-code-format>

## 字典回显

```markdown
在组件中需配置：

`descColumn`：布局一行显示几列（默认：一行显示 4 列）

`descData` 显示数据源<br/>

若需要配置`filters`（下拉选择转中文）<br/>
`descData`每项中配置`filters`有三个参数

还需要配置`listTypeInfo`下拉数据源；类型 Object<br/>

`dataList`后台返回的详情接口数据
```

<common-code-format>
  <docsComponents-VDetail-index slot="source"></docsComponents-VDetail-index>

<<< @/docs/.vuepress/components/docsComponents/VDetail/index.vue
</common-code-format>

## 自定义 label

<common-code-format>
  <docsComponents-VDetail-labelRender slot="source"></docsComponents-VDetail-labelRender>

<<< @/docs/.vuepress/components/docsComponents/VDetail/labelRender.vue
</common-code-format>
