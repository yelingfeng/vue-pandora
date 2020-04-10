import Mock from 'mockjs'
Mock.mock('/api/tablelist', 'get', {
  data: {
    'list|10': [
      {
        index: '@increment(1)',
        taskName: '@ctitle(4)',
        createTime: '@datetime()',
        updateTime: '@datetime()',
        taskStatusName: '@order("1","2","3")',
        taskContent: '@cparagraph(1)',
        jobResult: '@cword(2, 8)'
      }
    ]
  },
  message: '查询成功！',
  status: '200'
})
