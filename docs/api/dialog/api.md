# 弹窗组件

---

```ts
  <v-dialog
      title="请选择企业"
      width="40%"
      class="ent-choose"
      :visible="dialogSelectEnt"
      @update:visible="cancel"
    >
      <div class="select-ent-box flex-box flex-col">
        <div>
          {{item.entName}}
          <span style="color:#999;">(企业编码:{{item.entCode}})</span>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogSelectEnt = false">取 消</el-button>
        <el-button type="primary" @click="dialogSelectEnt = false">确 定</el-button>
      </div>
    </v-dialog>
```

<common-code-format>
  <docsComponents-VDialog-index slot="source"></docsComponents-VDialog-index>

<<< @/docs/.vuepress/components/docsComponents/VDialog/index.vue
</common-code-format>

## 基础属性（Attributes）

> 继承 `ElementUI`中`el-dialog`的属性皆可用(如：`close-on-click-modal`属性——点击空白区域是否关闭弹窗)

| 参数             | 说明                  | 类型    | 默认值 |
| :--------------- | :-------------------- | :------ | :----- |
| isShowDialogDrag | 是否开启拖拽功能      | Boolean | false  |
| isESC            | 是否开启 ESC 关闭弹窗 | Boolean | false  |

```

```
