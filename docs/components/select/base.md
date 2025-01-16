# Select 下拉 组件

---

## 单选

<common-code-format>
  <docsComponents-VSelect-index slot="source"></docsComponents-VSelect-index>
   <<< @/docs/.vuepress/components/docsComponents/VSelect/index.vue
</common-code-format>

## 单选分页

<common-code-format>
  <docsComponents-VSelect-singlePagination slot="source"></docsComponents-VSelect-singlePagination>
  `注意：每次切换页面会清空之前页面选中的数据`

<<< @/docs/.vuepress/components/docsComponents/VSelect/singlePagination.vue
</common-code-format>

## 自定义显示下拉项 label

<common-code-format>
  <docsComponents-VSelect-customLabel slot="source"></docsComponents-VSelect-customLabel>
  设置customLabel字符串表达式：`${_item.label}（${_item.id}）`<br/>
  注意：表达式必须以`_item`开头，且后面的属性必须存在`optionSource`中
  
   <<< @/docs/.vuepress/components/docsComponents/VSelect/customLabel.vue
</common-code-format>

## 多选

<common-code-format>
  <docsComponents-VSelect-multiple slot="source"></docsComponents-VSelect-multiple>
   <<< @/docs/.vuepress/components/docsComponents/VSelect/multiple.vue
</common-code-format>

## 多选分页

<common-code-format>
  <docsComponents-VSelect-multiplePagination slot="source"></docsComponents-VSelect-multiplePagination>
  `注意：每次切换页面会清空之前页面选中的数据`

<<< @/docs/.vuepress/components/docsComponents/VSelect/multiplePagination.vue
</common-code-format>

## 选中值返回对象

<common-code-format>
  <docsComponents-VSelect-returnObject slot="source"></docsComponents-VSelect-returnObject>
  在组件中配置：`returnObject` ；必须设置 `value-key` 属性且具有唯一性

<<< @/docs/.vuepress/components/docsComponents/VSelect/returnObject.vue
</common-code-format>
