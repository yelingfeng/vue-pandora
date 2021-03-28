import { IPandoraFormItems } from '../../../types/VForm'

const searchProp = {
  appName: '',
  provinceCode: '',
  appStoreCode: '',
  firstOnlineStartTime: '',
  firstOnlineEndTime: ''
}

const props = [
  {
    label: 'APP名称：',
    type: 'text',
    comOpt: {
      id: 'appName',
      width: 210,
      disabled: false,
      value: ''
    }
  },
  {
    label: '应用商店：',
    type: 'select',
    comOpt: {
      id: 'appStoreCode',
      width: 210,
      disabled: false,
      placeholder: '请选择应用商店',
      value: '',
      data: []
    }
  },
  {
    label: '首次上架时间：',
    type: 'date',
    wrap: true,
    comOpt: {
      id: 'firstOnlineTime',
      type: 'daterange',
      width: 210,
      disabled: false,
      value: '',
      dateOption: {
        clearable: true,
        rangeSeparator: '至'
      }
    }
  },
  {
    label: '属地：',
    type: 'select',
    comOpt: {
      id: 'provinceCode',
      width: 210,
      disabled: false,
      value: '',
      placeholder: '请选择属地',
      data: []
    }
  }
]

export const getFormItems = () => {
  return props as IPandoraFormItems[]
}
export const getFormSearchParams = () => {
  return searchProp
}
