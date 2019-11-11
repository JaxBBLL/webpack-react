import React from 'react'

export default class Hello extends React.Component {
  state = {
    msg: 'Webpack configuration by react'
  }

  render() {
    return <div className="title">{this.state.msg}</div>
  }
}
