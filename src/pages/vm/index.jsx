import { PureComponent } from 'react'
import { connect } from 'dva'
import { Button, Table } from 'antd'
import AuthButton from 'components/AuthButton'
import Action from './Action'
import style from './style.less'

@connect(({ vm, loading }) => ({ vm, loading: loading.effects['vm/query'] }))
export default class extends PureComponent {
  constructor(props) {
    super(props)
    this.query()
  }

  query = () => {
    const { dispatch } = this.props
    dispatch({
      type: 'vm/query',
      payload: {}
    })
  }

  render() {
    const { vm, loading } = this.props
    const { list } = vm

    const columns = [
      {
        title: '名称',
        dataIndex: 'name'
      },
      {
        title: '状态',
        dataIndex: 'state'
      },
      {
        title: '操作',
        width: 200,
        render: current => <Action current={current} />
      }
    ]

    return (
      <div>
        <div style={{ marginBottom: '10px' }}>
          <AuthButton role="admin">Admin 123</AuthButton>
          <AuthButton style={{ marginLeft: '10px' }}>User</AuthButton>
        </div>

        <Table
          data-testid="list"
          size="small"
          rowKey="uuid"
          columns={columns}
          dataSource={list}
        />
      </div>
    )
  }
}
