import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'antd'

export default class AuthButton extends PureComponent {
  static propTyps = {
    style: PropTypes.object,
    role: PropTypes.oneOf(['admin', 'user']),
    children: PropTypes.string,
    onClick: PropTypes.func
  }

  constructor(props) {
    super(props)
    this.state = { isClicked: false }
  }

  onClick = () => {
    setTimeout(()=>{
      this.setState({ isClicked: true })
    },1000)
    this.props.onClick && this.props.onClick()
  }

  render() {
    const { style, role, children } = this.props
    return (
      <Button
        style={style}
        disabled={role !== 'admin'}
        onClick={this.onClick}
        type={this.state.isClicked ? 'primary' : 'common'}>
        {children}
      </Button>
    )
  }
}
