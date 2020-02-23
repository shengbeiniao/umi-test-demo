import { PureComponent } from 'react'
import { connect } from 'dva'
import { Button, Dropdown, Menu, Icon } from 'antd'
import style from './style.less'

@connect()
export default class extends PureComponent {
  doAction = action => {
    const { current, dispatch } = this.props
    dispatch({
      type: 'vm/doAction',
      payload: {
        current,
        action
      }
    })
  }

  isEnable = type => {
    const { current } = this.props
    const { state } = current
    switch (type) {
      case 'start':
        return ['已停止'].indexOf(state) >= 0
      case 'stop':
        return ['运行中', '已暂停'].indexOf(state) >= 0
      case 'resume':
        return ['已暂停'].indexOf(state) >= 0
      case 'pause':
        return ['运行中'].indexOf(state) >= 0
    }
  }

  render() {
    const { current } = this.props

    const menu = (
      <Menu data-testid="menu">
        <Menu.Item
          data-testid="start"
          onClick={() => this.doAction('start')}
          disabled={!this.isEnable('start')}>
          启动
        </Menu.Item>
        <Menu.Item
          data-testid="stop"
          onClick={() => this.doAction('stop')}
          disabled={!this.isEnable('stop')}>
          停止
        </Menu.Item>
        <Menu.Item
          data-testid="pause"
          onClick={() => this.doAction('pause')}
          disabled={!this.isEnable('pause')}>
          暂停
        </Menu.Item>
        <Menu.Item
          data-testid="resume"
          onClick={() => this.doAction('resume')}
          disabled={!this.isEnable('resume')}>
          恢复
        </Menu.Item>
      </Menu>
    )

    return (
      <Dropdown overlay={menu}>
        <Button size="small" data-testid="dropdown">
          操作
          <Icon
            data-testid="icon"
            type={current.loading ? 'loading' : 'down'}
          />
        </Button>
      </Dropdown>
    )
  }
}
