<template>
  <v-layout-page>
    <v-layout-page-item>
      <el-radio-group v-model="widthSize" size="small" style="margin-bottom:15px;">
        <el-radio-button :label="2">一行展示2项</el-radio-button>
        <el-radio-button :label="3">一行展示3项</el-radio-button>
        <el-radio-button :label="4">一行展示4项</el-radio-button>
        <el-radio-button :label="5">一行展示5项</el-radio-button>
        <el-radio-button :label="6">一行展示6项</el-radio-button>
        <el-radio-button :label="7">一行展示7项</el-radio-button>
        <el-radio-button :label="8">一行展示8项</el-radio-button>
      </el-radio-group>
      <v-query-condition
        ref="queryCondition"
        :opts="opts"
        isExpansion
        :loading="loading"
        @submit="conditionEnter"
        isShowWidthSize
        :widthSize="widthSize"
      >
        <template #likeTransportNo="{param}">
          <el-input v-model="param.likeTransportNo" clearable placeholder="自定义插槽输入框" />
        </template>
      </v-query-condition>
    </v-layout-page-item>
  </v-layout-page>
</template>
<script>
import dayjs from 'dayjs'
const ADDRESS_TYPES = [
  {
    label: '前纺一车间',
    key: 'W1'
  },
  {
    label: '前纺二车间',
    key: 'W2'
  },
  {
    label: '前纺三车间',
    key: 'W3'
  }
]
export default {
  name: 'queryData',
  data() {
    return {
      widthSize: 2,
      loading: false,
      queryData: {
        likeCargoNo: null,
        likeBookNo: null,
        likeTransportNo: null,
        likeCargoName: null,
        workshopNum: null,
        workshopNum1: null,
        date1: null,
        date2: null,
        date: null
      }
    }
  },
  computed: {
    opts() {
      return {
        likeCargoNo: {
          label: '货源编号',
          comp: 'el-input'
        },
        likeBookNo: {
          labelRender: () => {
            return (
              <el-tooltip content={'自定义label'} placement="top">
                <div>订单编号</div>
              </el-tooltip>
            )
          },
          placeholder: '自定义label',
          comp: 'el-input'
        },
        likeTransportNo: {
          label: '运单编号',
          comp: 'el-input',
          slotName: 'likeTransportNo'
        },
        likeCargoName: {
          label: '货品名称',
          comp: 'el-input',
          bind: {}
        },
        workshopNum1: {
          label: '车间2',
          comp: 'el-select',
          changeEvent: 'change',
          // defaultVal: 'W1',
          bind: {},
          child: ADDRESS_TYPES.reduce((acc, cur) => {
            acc.push({
              comp: 'el-option',
              value: cur.key,
              bind: {
                label: cur.label,
                key: cur.key
              }
            })
            return acc
          }, [])
        },
        workshopNum: {
          label: '车间',
          comp: 'el-select',
          changeEvent: 'change',
          // defaultVal: 'W1',
          bind: {},
          child: [
            {
              comp: 'el-option',
              value: 'W1',
              bind: {
                label: '前纺一车间',
                key: 'W1'
              }
            },
            {
              comp: 'el-option',
              value: 'W2',
              bind: {
                label: '前纺二车间',
                key: 'W2'
              }
            },
            {
              comp: 'el-option',
              value: 'W3',
              bind: {
                label: '前纺三车间',
                key: 'W3'
              }
            }
          ]
        },
        date1: {
          label: '日期',
          comp: 'el-date-picker',
          bind: {
            valueFormat: 'yyyy-MM-dd'
          }
        },
        date: {
          label: '日期范围',
          comp: 'el-date-picker',
          span: 2,
          defaultVal: [
            dayjs()
              .add(-1, 'days')
              .format('yyyy-MM-DD'),
            dayjs().format('yyyy-MM-DD')
          ],
          bind: {
            type: 'daterange',
            rangeSeparator: '-',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
            valueFormat: 'yyyy-MM-dd'
          }
        }
      }
    },
    // 查询条件所需参数
    getQueryData() {
      const {
        likeCargoNo,
        likeBookNo,
        likeTransportNo,
        likeCargoName,
        workshopNum,
        workshopNum1,
        date1,
        date
      } = this.queryData
      return {
        likeCargoNo,
        likeBookNo,
        likeTransportNo,
        likeCargoName,
        workshopNum,
        workshopNum1,
        date1,
        beginDate: date[0] ? date[0] : null,
        endDate: date[1] ? date[1] : null
      }
    }
  },
  // 方法
  methods: {
    // 点击查询按钮
    conditionEnter(data) {
      console.log('查询条件', data)
      this.loading = true
      this.queryData = data
      console.log('最终条件', this.getQueryData)
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>
